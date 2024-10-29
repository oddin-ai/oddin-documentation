const sidebars = {
  oddinSidebar: [
    'abstract',
    {
      type: 'category',
      label: 'Welcome to Oddin',
      items: ['welcome-to-oddin/introduction'],
    },
    {
      type: 'category',
      label: 'Problem Statement',
      items: ['problem-statement/introduction'],
    },
    {
      type: 'category',
      label: 'Publisher Integration',
      items: ['publisher-tutorial/requirements'],
    },
    {
      type: 'category',
      label: 'Advertiser Integration',
      items: ['advertiser-tutorial/node-deployment'],
    },
    ,
    'faq',
  ],
};

module.exports = sidebars;
