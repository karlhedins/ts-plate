const style = `<style>button[title='Copy to clipboard'] svg { color: #fff; }</style>`;
import pkg from './package.json';

module.exports = {
  src: './src',
  title: 'TS Plate',
  description: pkg.description,
  typescript: true,
  menu: [
    'Introduction',
    {
      name: 'Adding TS to a JS project',
      menu: ['Fast setup'],
    },
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
};
