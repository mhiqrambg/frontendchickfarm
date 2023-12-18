import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Portfolio from '../components/Sections/Portfolio';
import WeHelp from '../components/Sections/WeHelp';
import SmartShop from '../components/Sections/SmartShop';
import SpecialEX from '../components/Sections/SpecialEX';
import ContactUs from '../components/Sections/ContactUs';
import Beranda from '../components/Sections/Beranda';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChickFarm</title>
        <meta name="description" content="Generated by C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Beranda />
        <SpecialEX />
        <WeHelp />
        <SmartShop />
        <Portfolio />
        <ContactUs />
      </div>
    </div>
  );
}
