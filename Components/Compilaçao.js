import Style from './../styles/Home.module.css'

import ReactPlayer from 'react-player/lazy'


export default function Compilação() {

    return (
        <section className={Style.SectionCompilação}>
            <div className={Style.Compilação}>
                <h3>Aposto que você já me ouviu alguma vez</h3>
                <iframe style={{ width: "100%", height: "166", scrolling: "no", frameborder: "no", }}
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/897327451&color=be2150&
            show_artwork=false&show_comments=false&show_user=false"></iframe>
                <div className={Style.AudioLocutor}><a href="https://soundcloud.com/sabat-santos-28840947"
                    title="Sabat Santos" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Sabat Santos</a>
                    <a href="https://soundcloud.com/sabat-santos-28840947/compilacao-youtube-music"
                        title="Compilação Youtube Music, Amazon, Intel, Google e outros" target="_blank"
                        style={{ color: "#ccc", textDecoration: "none" }}>Compilação Youtube Music, Amazon, Intel, Google e outros</a></div>
            </div>
            <div className={Style.LocutorAudio}>
                <div>
                    <iframe style={{ width: "100%", height: "166", scrolling: "no", frameborder: "no", }}
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/897327454&color=be2150&show_artwork=false&show_
                    comments=false&show_user=false"></iframe>
                    <div className={Style.AudioLocutor}><a href="https://soundcloud.com/sabat-santos-28840947"
                        title="Sabat Santos" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Fernando Rodrigues</a>
                        <a href="https://soundcloud.com/sabat-santos-28840947/viagem-paradisiaca-com-a"
                            title="Compilação Youtube Music, Amazon, Intel, Google e outros" target="_blank"
                            style={{ color: "#ccc", textDecoration: "none" }}>Compilação Youtube Music, Amazon, Intel, Google e outros</a></div>
                </div>
                <div>
                    <iframe style={{ width: "100%", height: "166", scrolling: "no", frameborder: "no", }}
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/897327463&color=be2150&show_artwork=false&show_comments=false&show_user=false"></iframe>
                    <div className={Style.AudioLocutor}><a href="https://soundcloud.com/sabat-santos-28840947"
                        title="Fernando Rodrigues" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Fernando Rodrigues</a>
                        <a href="https://soundcloud.com/sabat-santos-28840947/viagem-paradisiaca-com-a"
                            title="Compilação Youtube Music, Amazon, Intel, Google e outros" target="_blank"
                            style={{ color: "#ccc", textDecoration: "none" }}>Compilação Youtube Music, Amazon, Intel, Google e outros</a></div>
                </div>
            </div>
            <h3>Conheça Algumas Dublagens que foram feitas por mim!</h3>
            <div className={Style.Videos}>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=2aLqfVoEEIQ&t=1s&ab_channel=FernandoRodrigues" width="100%" height="100%" />
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=19rqD6i7Uu4&ab_channel=FernandoRodrigues" width="100%" height="100%" />
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=uW7_AxDW2Ew&t=1s&ab_channel=FernandoRodrigues" width="100%" height="100%" />
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=YbI4sxLneP4&ab_channel=FernandoRodrigues" width="100%" height="100%" />
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=Kuwr9QcfGKI&ab_channel=FernandoRodrigues" width="100%" height="100%" />
                    </div>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=OsznMU5v4xo&ab_channel=PitneyBowes" width="100%" height="100%" />
                    </div>
            </div>
        </section>
    )
}
