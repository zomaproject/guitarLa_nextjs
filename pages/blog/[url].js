import Layout from '../../components/layout';
import Image from 'next/image';
import { formatearFecha } from '../../utils/helper';
import styles from '../../styles/blog.module.css'
const Post = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes
  return (
    <>
      <Layout
        title='Guitarras Eléctricas y acusticas'
      >
        <article className={`${styles.post} ${styles['mt-3']}`}>
          <div className={styles.contenido}>
            <Image
              src={imagen.data.attributes.url}
              alt={`${titulo}`}
              width={1000}
              height={400}
              />
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const { data: post } = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  ).then((res) => res.json());
  console.log(post)
  return {
    props: {
      post,
    },
  };
}
