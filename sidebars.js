const sidebars = {
  oddinSidebar: [
    'abstract',
    'introduction',
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
