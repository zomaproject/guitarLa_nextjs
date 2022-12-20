import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/layout';
import styles from '../../styles/guitarras.module.css';

const Producto = ({ guitarra ,agregarCarrito }) => {
  const [cantidad, setCantidad] = useState()
  const { nombre, imagen, descripcion, precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad<1){
      alert('Cantidad no válida')
      return
    }

    // 
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      precio,
      nombre,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <>
      <Layout
        title={` Guitarra ${nombre}`}
      >
        <div className={styles.guitarra}>
          <Image
            src={imagen?.data.attributes.url}
            width={600}
            alt={`Image guitarra ${nombre}`}
            height={400}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <form className={styles.formulario}
              onSubmit={handleSubmit}
            >
              <label htmlFor='cantidad'>Cantidad: </label>
              <select name="" id="cantidad"
                onChange={e => setCantidad(+e.target.value)}
              >
                <option value="0">-- seleccione --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>   
                <input type="submit"
                value={'Agregar al carrito'}
                />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Producto;

/* export async function getServerSideProps({ query: { url } }) {  //NOTE: Esta forma aunque es más fácil consulta en cada detalle a la apí
  const { data: guitarra } = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  ).then((res) => res.json());
  return {
    props: {
      guitarra,
    },
  };
} */

export async function getStaticPaths() {
  const { data } = await fetch(`${process.env.API_URL}/guitarras`).then((res) =>
    res.json()
  );

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const { data: guitarra } = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  ).then((res) => res.json());
  return {
    props: {
      guitarra,
    },
  };
}
