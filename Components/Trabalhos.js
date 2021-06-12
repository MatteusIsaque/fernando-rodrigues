import Image from 'next/image'
import Style from './../styles/Home.module.css'

import Microfone from './../img/Locutor.png'
import Apresentador from './../img/apresentador.png'
import Televisão from './../img/television-150x150.png'

export default function Trabalhos() {

    return (
        <section className={Style.SectionTrabalhos}>
            <div className={Style.DivTrabalhos}>
                <div>
                    <Image src={Microfone} width={150} height={150} layout="fixed" />
                    <h4>Locução e dublagem</h4>
                </div>
                <div>
                    <Image src={Apresentador} width={150} height={150} layout="fixed"/>
                    <h4>Apresentação de eventos</h4>
                </div>
                <div>
                    <Image src={Televisão} width={150} height={150} layout="fixed"/>
                    <h4>Publicidade para TV e internet</h4>
                </div>
            </div>
            <button>Fale Comigo</button>
        </section>
    )
}