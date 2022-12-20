import Image from "next/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'
const Guitarra = ({guitarra}) => {
  const {imagen , nombre, descripcion, precio, url}  = guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url}   width={600} alt={`Image guitarra ${nombre}`} height={400}/> 
        <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra ; 
