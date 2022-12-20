
import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css'
 const Tienda = ({guitarras}) => {
  return (
    <>
      <Layout
        title='Tienda'
        description='Tienda virtual GuitarraLa' 
      >
        <main className='contenedro'>
          <h1 className='heading'> Nuestra Colección</h1>

          <div className={styles.grid}>
            {guitarras.map(guitarra => (
              <Guitarra  key = {guitarra?.id} guitarra= {guitarra.attributes}/>
            ))}
          </div>

        </main>
      </Layout>
    </>
  );
};

export default Tienda;

/* export  async function  getStaticProps(){
  const  {data: guitarras} = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`).then(res => res.json())
  return {
    props: {
      guitarras
    }
  }
} */

 
 export  async function  getServerSideProps(){
  const  {data: guitarras} = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`).then(res => res.json())
  return {
    props: {
      guitarras
    }
  }
}

 
