import Link from "next/link";
import Layout from "../components/layout";

const Pagina404 = () => {
  return (
    <>
      <Layout 
        title="Pagina no Encontrada"
      >

        <p className="error">Página no encontrada</p>

        <Link href={'/'} className={'error-enlace'}>Ir al inicio</Link>

      </Layout>
    </>
  )
}

export default  Pagina404;
