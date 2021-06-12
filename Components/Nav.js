import Img from 'next/image'

import Logo from './../img/logo-redonda.png'
import Letras from './../img/letras-logo.png'

export default function nav() {

    return (
        <>
            <div>
                <Img src={Logo} width={56} height={50} />
            </div>
            <div>
                <Img src={Letras} width={125} height={50} />
            </div>
        </>
    )
}