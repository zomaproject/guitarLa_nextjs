import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';
const Nosotros = () => {
  return (
    <>
      <Layout title='Nosotros' description='Sobre nosotros GuitarLa'>
        <main className='contendor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src={'/img/nosotros.jpg'}
              alt='nosotros'
              width={1000}
              height={800}
            />
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Nosotros;
