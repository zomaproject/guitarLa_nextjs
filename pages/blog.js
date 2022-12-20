import Layout from '../components/layout';
import Post from '../components/post';
import styles from '../styles/grid.module.css'
const Blog = ({ posts}) => {
  return (
    <>
      <Layout
        title='Blog'
        description='Blog de Música, venta de guitarras' 
      >
        <main className='contenedor'> 

          <h1 className='heading'> Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post => (
              <Post key = {post.id} post= {post.attributes}/> 
            ))}
          </div>
        </main>
          
      </Layout>
    </>
  );
};

export default Blog;


export  async function  getStaticProps(){
  const  {data: posts} = await fetch(`${process.env.API_URL}/posts?populate=imagen`).then(res => res.json())
  return {
    props: {
      posts
    }
  }
}



