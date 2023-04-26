import Head from 'next/head';
import Link from 'next/link';

export default function FirstProduct() {
    return(
        <div>
            <Head>
                <title>První úžasný produkt | ProfiSOLV </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <img src='/logo_profisolv_print_cisteni_2023.png'></img>
                <h1>První užasný produkt</h1>

            <Link href='/'>[Zpět na hlavní stránku]</Link>

            </main>

            <footer>
                Vytvořil Profisolv&copy; 2023
            </footer>
      </div>
    )
}
