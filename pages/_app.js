import Layout from '../common/Layout'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
function MyApp({ Component, pageProps }) {
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
