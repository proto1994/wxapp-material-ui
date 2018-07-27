module.exports = {
  title: 'WXAPP MATERIAL UI',
  description: '基于Google design的小程序组件',
  base: "/wxapp-material-ui/",
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: '文档', link: '/guide/' },
      { text: '发布日志', link: 'https://github.com/proto1994/wxapp-material-ui/releases' },
      { text: 'GitHub', link: 'https://github.com/proto1994/wxapp-material-ui' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          children: [
            '',
          ],
        },
        {
          title: 'Components Demos',
          children: [
            'button'
          ]
        }
      ]
    },
  }
}
