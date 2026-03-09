import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { defineConfig } from '@rstest/core';

// Docs: https://rstest.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  testEnvironment: 'happy-dom',
  setupFiles: ['./tests/rstest.setup.js'],
});
