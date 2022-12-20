import Image from "next/image";
import Link from "next/link";
import styles from '../styles/blog.module.css'
import { formatearFecha } from "../utils/helper";
const Post = ({ post }) => {
  const { imagen,  contenido, publishedAt, titulo, url } = post;
  console.log(url)
  return <article>
  <div className={styles.contenido}>
  <Image src={imagen.data.attributes.formats.medium.url}  alt={`${titulo}`} width={600} height={400}/>
      <h3>{titulo}</h3>
      <p className={styles.fecha}>{formatearFecha(publishedAt)}</p> 
      <p className={styles.resumen}>{contenido}</p>
      <Link href={`/blog/${url}`} className={styles.enlace}>
        Leer post
      </Link>
    </div>
  </article>;
};

export default Post;
