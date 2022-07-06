import '../styles/globals.css'
import Head from 'next/head';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
function MyApp({ Component, pageProps }) {
  module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossorigin='anonymous'
        />  
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
