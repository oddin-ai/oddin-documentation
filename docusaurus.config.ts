import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Oddin',
  tagline: 'Permissionless Programmatic Platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.oddin.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // themes: ['@docusaurus/theme-classic'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'oddin Logo',
        src: 'img/oddin-logo-colour-x2-cropped.png',
        srcDark: 'img/oddin-logo-reverse-x1-cropped.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'faq',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/oddin-ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/docs/welcome-to-oddin/introduction',
            },
            {
              label: 'Faq',
              to: '/docs/faq',
            },
            {
              label: 'Manuals',
              to: '/docs/getting-started/for-kols',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/oddinai',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/oddin/',
            },
            {
              label: 'X',
              href: 'https://x.com/Oddinai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oddin-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} oddin.ai, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
