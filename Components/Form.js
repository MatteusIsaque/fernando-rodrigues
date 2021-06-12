import { useState } from "react"
import Style from './../styles/Home.module.css'
import Image from 'next/image'

import Gravação from './../img/gravação.png'
import Estudio from './../img/estudio.png'

import axios from 'axios'


export default function Form() {

    const [Nome, setNome] = useState()
    const [Numero, setNumero] = useState()
    const [Email, setEmail] = useState()

    async function enviarItem(event) {

        event.preventDefault()

        const data = {
            Nome,
            Numero,
            Email
        }

        try {
            const resposta = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/nodemailer`, data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <section className={Style.SectionFormulario}>
            <form onSubmit={enviarItem}>
                <input placeholder="Nome" value={Nome} onChange={(e) => { setNome(e.target.value) }} required/>
                <input placeholder="Numero" value={Numero} onChange={(e) => { setNumero(e.target.value) }} required/>
                <textarea placeholder="Nome" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                <button type="submit" >Enviar Mensagem</button>
            </form>

            <div className={Style.infoLadoForm}>
                <div>
                    <h4 style={{ color: "#333", fontSize: "16px", textAlign:"center" }}>Estúdio profissional próprio, moderno e personalizado, com excelente isolamento acústico e as mais sofisticadas ferramentas do mercado à disposição.<br /><br />
                        Gravações em Português BR, Inglês e Espanhol, com experiência de mais de 20 anos e trabalhos presentes em mais de 30 países.</h4>
                </div>
            </div>
        </section>
    )
}