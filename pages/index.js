import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ProfiSOLV - hlavní stránka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src='/logo_profisolv_print_cisteni_2023.png'></img>
        <p className={styles.description}>
          Zde pro Vás tvoříme naše nové stránky s eshopem
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Eshop &rarr;</h3>
            <p>Budete si moci prohlédnout a objednat produkty</p>
          </div>

          <div className={styles.card}>
            <h3>Technické info &rarr;</h3>
            <p>Poradíme, který produkt vybrat pro jakou aplikaci</p>
          </div>

          <div className={styles.card}>
            <h3>Naši dodavatelé &rarr;</h3>
            <p>Stručné info o našich prověřených partnerech</p>
          </div>

          <div className={styles.card}>
            <h3>Informace o firmě &rarr;</h3>
            <p>A také samozřejmě nějaké to info o nás.</p>
          </div>
        </div>
      </main>

      <footer>
          Vytvořil Profisolv&copy; 2023
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
