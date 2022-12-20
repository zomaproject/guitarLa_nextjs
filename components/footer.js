import Link from 'next/link';
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <>
      <header className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegacion}>
            <Link href={'/'} >Inicio</Link>
            <Link href={'/blog'} >Blog</Link>
            <Link href={'/nosotros'} >Nosotros</Link>
            <Link href={'/tienda'} >Tienda</Link>
          </nav>
            <p className={styles.copyright}>Todos los derechos resevados {new Date().getFullYear()}</p>
        </div>
      </header>
    </>
  );
};

export default Footer;
