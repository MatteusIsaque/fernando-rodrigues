import Style from './../styles/Home.module.css'
import Link from 'next/link'

export default function btnZap() {

    return (
        <div>
            <Link href="https://api.whatsapp.com/send?phone=5511996976214">
                <img className={Style.btnZap} src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" />
            </Link>
        </div>
    )
}