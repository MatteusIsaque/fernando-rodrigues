import Style from './../styles/Home.module.css'
import Image from 'next/image'

import Fernando from './../img/fernando.jpg'

export default function FirstComponent() {

    return (
        <>
            <div className={Style.FirstComponent}>
                <div>
                    <h1 style={{ color: "#D52B59", textTransform: "uppercase" }}>Precisa de uma voz para o seu negócio ?</h1>
                    <p>Meu nome é Fernando Rodrigues, já tive oportunidade de trabalhar com as maiores marcas e empresas do mundo, como, <span>Amazon</span>, <span>Youtube</span>, <span>Google</span>, e tambem tive o enorme prazer de participar de grandes projetos de dublagens para <span>Nickelodeon</span>, <span>HP</span>, e outras empresas.</p>
                    <h2>Hoje atendo os seguintes serviços:
                    <ul>
                        <li>Comercial</li>
                        <li>Gravação em off</li>
                        <li>Vinhetas</li>
                        <li>Publicidade</li>
                        <li>Podcast</li>
                        <li>Narrativa</li>
                        <li>Dublagem</li>
                    </ul>
                    </h2>
                    <button className={Style.ButtonZap}> Fale Conosco pelo WhatsApp</button>
                </div>
                <div>
                    <img src={Fernando} className={Style.primeiraImg} />
                </div>
            </div >
        </>
    )
}