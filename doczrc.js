const style = `<style>button[title='Copy to clipboard'] svg { color: #fff; }</style>`;
import pkg from './package.json';
import doczPluginNetlify from 'docz-plugin-netlify';

module.exports = {
  src: './src',
  title: 'TS Plate',
  description: pkg.description,
  typescript: true,
  menu: [
    'Introduction',
    {
      name: 'Adding TS to a JS project',
      menu: ['Initial setup', 'Adopting TS step by step'],
    },
    {
      name: 'Starting a new TS project',
      menu: ['Frontend', 'Backend'],
    },
    'TS-Resources',
    { name: 'Github', href: 'https://github.com/karlhedins/ts-plate' },
  ],
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css',
        },
      ],
      raw: [style],
    },
  },
  themeConfig: {
    codemirrorTheme: 'dracula',
    colors: {
      primary: '#077db2',
    },
  },
  plugins: [doczPluginNetlify()],
};
