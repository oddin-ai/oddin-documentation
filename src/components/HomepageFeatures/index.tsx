import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          <Feature
            title='Empowering the new advertising eco-system'
            description={
              <div>
                Go to the{' '}
                <Link to='/docs/welcome-to-oddin/introduction'>docs</Link> now!
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
