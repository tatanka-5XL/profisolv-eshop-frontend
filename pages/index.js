import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ProfiSOLV.com - spolehlivý partner pro mazání a čištění | ProfiSOLV.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <img src='/logo_profisolv_web_cisteni_2023.png'></img>
            </div>
            <div className={styles.menu}>
              <ul>
                <li>Maziva</li>
                <li>Čističe</li>
                <li>Lepidla</li>
              </ul>
            </div>
            <div className={styles.window}>
              <h1>Zde pro Vás tvoříme naše nové stránky s eshopem</h1>
                <h2><Link href='/products/first-product'>První produkt</Link></h2>
                <p>Vynikající a úžasný produkt</p>
            </div>
            <div className={styles.footer}>
              Vytvořil Profisolv&copy; 2023
            </div>
          </div>
        </main>

        <style jsx>{`
          main {
          }

          footer {
          }
        `}</style>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            height: 100%;
          }
          body {
            border: 5px dashed red;
            height: 100%;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}</style>


    </div>

  )
}
