import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  oddinSidebar: [
    {
      type: 'category',
      label: 'Welcome to Oddin',
      items: ['welcome-to-oddin/introduction', 'welcome-to-oddin/overview'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/for-kols',
        'getting-started/for-advertisers',
        'getting-started/suggest-campaign',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard Overview',
      items: [
        'dashboard-overview/for-kols',
        'dashboard-overview/for-advertisers',
      ],
    },
    ,
    'faq',
  ],
};

export default sidebars;
