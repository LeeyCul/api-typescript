export default {
  entry: 'src/index.ts',
  esm: {
    type: 'babel',
    minify: true
  },
  cjs: {
    type: 'babel',
    minify: true
  }
};
