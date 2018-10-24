const style = `<style>button[title='Copy to clipboard'] svg { color: #fff; }</style>`;

module.exports = {
  title: 'TS Plate',
  typescript: true,
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
