/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/**
 * 获取yapi数据
 */
import got from 'got';
import { CategoryList, InterfaceList, Category, Project, SyntheticalConfig } from './types';

import { isEmpty, memoize, omit } from 'vtils';
import { throwError } from './utils';

/**
 *
 * @param url 请求方法
 * @param query
 * @returns
 */
export const fetchApi = async function <T = any>(url: string, query: Record<string, any>): Promise<T> {
  const { body: res } = await got.get<{
    errcode: any;
    errmsg: any;
    data: any;
  }>(url, {
    searchParams: query,
    responseType: 'json',
    https: {
      rejectUnauthorized: false
    }
  });
  /* istanbul ignore next */
  if (res && res.errcode) {
    throwError(res.errmsg);
  }
  return res.data || res;
};

/**
 * 获取项目基本信息
 * 缓存
 */
export const fetchProject = memoize(
  async ({ serverUrl, token }: SyntheticalConfig) => {
    const projectInfo = await fetchApi<Project>(`${serverUrl}/api/project/get`, {
      token: token
    });
    const basePath = `/${projectInfo.basepath || '/'}`.replace(/\/+$/, '').replace(/^\/+/, '/');
    projectInfo.basepath = basePath;
    return projectInfo;
  },
  ({ serverUrl, token }: SyntheticalConfig) => `${serverUrl}|${token}`
);

/**
 * 通过导出接口获取项目下的所有接口
 */
export const fetchExport = memoize(
  async ({ serverUrl, token }: SyntheticalConfig) => {
    const projectInfo = await fetchProject({ serverUrl, token });
    const categoryList = await fetchApi<CategoryList>(`${serverUrl}/api/plugin/export`, {
      type: 'json',
      status: 'all',
      isWiki: 'false',
      token: token
    });
    return categoryList.map(cat => {
      cat.list = (cat.list || []).map(item => {
        item.path = `${projectInfo.basepath}${item.path}`;
        return item;
      });
      return cat;
    });
  },
  ({ serverUrl, token }: SyntheticalConfig) => `${serverUrl}|${token}`
);

/**
 * 获取
 * @param param0
 * @returns
 */
export const fetchInterfaceList = async function ({ serverUrl, token, id }: SyntheticalConfig): Promise<Category[]> {
  const allData = await fetchExport({ serverUrl, token });
  const category = (allData || []).filter(
    cat => !isEmpty(cat) && !isEmpty(cat.list) && (!id || (id && cat.list[0].catid === id))
  );

  if (category) {
    category.forEach(interfaceInfo => {
      interfaceInfo._id = interfaceInfo.list[0].catid;
      interfaceInfo.list.forEach(item => {
        // 实现 _category 字段
        item._category = omit(interfaceInfo, ['list']);
      });
    });
  }

  return category;
};

/**
 * 获取项目信息
 * @param syntheticalConfig
 * @returns
 */
export const fetchProjectInfo = async function (syntheticalConfig: SyntheticalConfig) {
  const projectInfo = await fetchProject(syntheticalConfig);
  const projectCats = await fetchApi<CategoryList>(`${syntheticalConfig.serverUrl}/api/interface/getCatMenu`, {
    token: syntheticalConfig.token,
    project_id: projectInfo._id
  });
  return {
    ...projectInfo,
    cats: projectCats,
    getMockUrl: () => `${syntheticalConfig.serverUrl}/mock/${projectInfo._id}`,
    getDevUrl: (devEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === devEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    },
    getProdUrl: (prodEnvName: string) => {
      const env = projectInfo.env.find(e => e.name === prodEnvName);
      return (env && env.domain) /* istanbul ignore next */ || '';
    }
  };
};
