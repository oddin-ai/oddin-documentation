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
        'getting-started/for-advertisers',
        'getting-started/campaign-setup',
        'getting-started/campaign-management',
        'getting-started/oddinbuzz-agent',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard Overview',
      items: [
        'dashboard-overview/overview',
        'dashboard-overview/for-advertisers',
      ],
    },
    '4x4-post-strategy',
    'faq',
  ],
};

export default sidebars;
