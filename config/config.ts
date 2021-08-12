import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  dva: {
    immer: true,
    hmr: false,
  },
});