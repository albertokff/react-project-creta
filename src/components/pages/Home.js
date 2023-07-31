import molecula from '../../img/Creta.png'

import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span> Creta</span></h1>

            <img src={molecula} alt="Creta" />
            <p>Administre seu negócio com Inteligência!</p>
            <LinkButton to="/newproject" text="Criar Atividade" />
        </section>
    )
}

export default Home