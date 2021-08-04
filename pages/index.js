import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Menu from './../Components/Nav'
import FirstComponts from './../Components/FirstComponent'
import Compilação from '../Components/Compilaçao'
import Trabalhos from './../Components/Trabalhos'
import FormSection from './../Components/Form'
import Rodape from './../Components/creditos'
import ButtonZap from './../Components/buttonZap'
import Popup from '../Components/popup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fernando Locutor - Locução e Dublagem</title>
        <meta name="description" content="Locução e Dublagem profissional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Menu />
      </nav>

      <main>
        <FirstComponts />
        <Compilação />
        <Trabalhos />
        <FormSection />
      </main>

      <footer>
        < ButtonZap />
        < Rodape />
        <Popup />
      </footer>
    </div>
  )
}
