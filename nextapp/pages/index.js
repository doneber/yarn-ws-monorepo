import Head from 'next/head';
import styles from '../styles/Home.module.css';
//Import the function to the `Next.js` app
import { getSiteInfo } from '@yarn-monorepo/framework';

export default function Home() {
  let siteInfo = getSiteInfo(); //Define a variable to get the values
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteInfo.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Output the site title and subtitle to the screen*/}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {siteInfo.title}</h1>
        <p className={styles.description}>{siteInfo.sub}</p>
      </main>
    </div>
  );
}