#!/usr/bin/env node

import CLI from '../src/cli';
new CLI().run(process.argv.slice(2));
