import Navbar from "../Components/Navbar";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

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
        {/* font awesome icon cdn */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        {/* recaptcha cdn */}
      </Head>

      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Footer />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Provider>
    </>
  );
}

export default MyApp;
