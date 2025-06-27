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
      items: ['getting-started/for-kols', 'getting-started/suggest-campaign', 'getting-started/suggest-campaign-Advertiser'],
    },
    {
      type: 'category',
      label: 'Dashboard Overview',
      items: ['dashboard-overview/overview', 'dashboard-overview/for-kols'],
    },
    'faq',
  ],
};

export default sidebars;
