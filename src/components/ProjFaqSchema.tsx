import React from 'react';
import Head from '@docusaurus/Head';

// You must manually keep this data in sync with the visible content on your FAQ page.
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Oddin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oddin is a self-serve advertising platform designed specifically for the crypto space. It provides advertisers with direct, automated access to our vetted network of Key Opinion Leaders (KOLs) on Telegram and other social platforms. Instead of spending weeks on manual outreach and negotiations, you can use Oddin to discover relevant channels, launch performance-based campaigns (CPC), and track results in a transparent dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is KOL Crypto Marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "KOL Crypto Marketing is a strategy that leverages the trust and reach of Key Opinion Leaders (KOLs)—influential figures with dedicated communities on platforms like Telegram. Unlike traditional advertising, KOL marketing focuses on native content where the influencer integrates your project's message authentically to their audience. Platforms like Oddin solve the challenge of finding and verifying legitimate KOLs by creating a transparent marketplace.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Oddin work for Advertisers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our platform combines powerful technology with expert guidance. First, you define your campaign strategy and goals. Second, our team uses our private, internal network of fully vetted KOLs to propose a shortlist of channels that are a perfect match. Finally, once you approve the KOLs, your campaign is launched, and you can monitor its performance in our real-time dashboard on a CPC (Cost Per Click) basis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum budget to start a campaign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum budget to launch a campaign on Oddin is $1,000 USD. This entry point is designed to be accessible while still being substantial enough to run a campaign that gathers meaningful performance data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Oddin ensure KOL quality and campaign safety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We employ a multi-layered approach including rigorous KOL vetting, automated ad screening for malicious content, and transparent performance data to eliminate concerns about fake engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is ad performance measured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Performance is measured in your real-time advertiser dashboard, focusing on clear, actionable metrics. You can track: - Impressions: The number of times your ad was viewed. - Clicks: The number of users who clicked on your ad. - Click-Through Rate (CTR): The percentage of viewers who clicked your ad (`Clicks ÷ Impressions`). - Cost Per Click (CPC): The effective cost of each click. - Total Spend: Your campaign budget consumption to date. You can also generate and export reports for deeper analysis.',
      },
    },
  ],
};

function FaqSchema() {
  return (
    <Head>
      <script type='application/ld+json'>{JSON.stringify(faqData)}</script>
    </Head>
  );
}

export default FaqSchema;
