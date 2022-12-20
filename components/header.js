import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
const Header = () => {
  const router = useRouter();
  // console.log(router)

  // <Link href={'/nosotros'} className={router.pathname = '/no' ? styles.active : '' }>Nosotros</Link>
  return (
    <>
      <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <Link href={'/'}>
            <Image width={400} height={400} alt='logo' src='/img/logo.svg' />
          </Link>
          <nav className={styles.navegacion}>
            <Link
              href={'/'}
              className={router.pathname === '/' ? styles.active : ''}
            >
              Inicio
            </Link>
            <Link
              href={'/blog'}
              className={router.pathname === '/blog' ? styles.active : ''}
            >
              Blog
            </Link>
            <Link
              href={'/nosotros'}
              className={router.pathname === '/nosotros' ? styles.active : ''}
            >
              Nosotros
            </Link>
            <Link
              href={'/tienda'}
              className={router.pathname === '/tienda' ? styles.active : ''}
            >
              Tienda
            </Link>
            <Link
              href={'/carrito'}
              className={router.pathname === '/carrito' ? styles.active : ''}
            >
              <Image
                src={'/img/carrito.png'}
                alt='carrito'
                width={30}
                height={25}
              />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
