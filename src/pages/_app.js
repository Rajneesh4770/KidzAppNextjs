import Head from 'next/head';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../styles/globals.css'
import {Provider} from 'react-redux'
import {store} from '../Redux/Store'
function MyApp({ Component, pageProps }) {
  // module.exports = {
  //   eslint: {
  //     // Warning: This allows production builds to successfully complete even if
  //     // your project has ESLint errors.
  //     ignoreDuringBuilds: true,
  //   },
  // }
  return (
    <>
      <Head>

        {/* slick slider cdn */}
        <link rel="stylesheet" type="text/css"  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        {/* font awesome icon cdn */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
         {/* recaptcha cdn */}
        
      </Head>

      {/* <Provider store={store}> */}
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      {/* </Provider> */}
    </>
  );
}

export default MyApp
