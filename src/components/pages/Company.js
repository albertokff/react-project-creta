import styles from './Company.module.css'
import tipoempresa from '../../img/tipos-empresas.webp'

function Company() {
    return (
        <section className='principal'>
            <img className={styles.empresas} src={tipoempresa} alt="Tipo de Empresas" />

            <div>
                <h3>Nossa História</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique lorem aliquam eros viverra ultrices.
                Nullam lobortis aliquet varius. Nulla id eros venenatis, venenatis ipsum efficitur, pulvinar elit. Vivamus cursus
                neque ligula, id efficitur ex scelerisque vitae. Fusce luctus velit id mollis hendrerit. Nullam ut ornare turpis. 
                Etiam efficitur mollis vestibulum. In congue eros ligula, in interdum sapien tincidunt in. Nunc vel magna 
                pellentesque, accumsan felis nec, ultricies massa. Aliquam orci ante, rutrum id mauris euismod, vehicula interdum l
                igula. Praesent id rhoncus ante. Pellentesque dignissim, nisl quis varius pretium, tellus risus sagittis nulla, u
                t tempus nisl ex nec nunc. Maecenas sit amet orci sit amet metus facilisis viverra. Vestibulum imperdiet quis 
                massa at eleifend. Praesent orci ligula, elementum in imperdiet non, sollicitudin non erat. Phasellus ultrices 
                aliquet erat ut sagittis. <br />

                Nunc facilisis sapien sit amet mauris rutrum, et elementum nibh blandit.
                Curabitur in nisl purus. In sit amet laoreet massa. Donec scelerisque magna 
                eget mauris commodo vulputate. Cras quis faucibus purus. Phasellus quis sollicitudin ligula.
                Praesent et augue et nibh sodales placerat a ac libero. Integer interdum quam lectus, ut sodales
                ligula finibus at. In mi dolor, cursus ut libero sed, porttitor posuere risus. Donec consequat eu massa 
                quis lacinia. Pellentesque quis sapien at lacus interdum rhoncus. Phasellus cursus id libero eget iaculis.
                Praesent sed sagittis orci. Ut vel diam ut erat facilisis iaculis nec vel ante. Integer enim ipsum, rutrum
                a varius sit amet, porttitor sit amet risus. Pellentesque tincidunt mi porttitor ante hendrerit, vel 
                ultricies dui ultrices.  
                </p>
            </div>
        </section>       
    )
}

export default Company