import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProfiSOLV.com - spolehlivý partner pro mazání a čištění | ProfiSOLV.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src='/logo_profisolv_print_cisteni_2023.png'></img>
        <h1>Zde pro Vás tvoříme naše nové stránky s eshopem</h1>

        <div>
          <div>
            <h2><Link href='/products/first-product'>První produkt</Link></h2>
            <p>Vynikající a úžasný produkt</p>
          </div>

        </div>
      </main>

      <footer>
          Vytvořil Profisolv&copy; 2023
      </footer>

    </div>

  )
}
