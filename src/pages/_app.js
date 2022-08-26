import Navbar from '../Components/Navbar';
import Head from 'next/head';

import Footer from '../Components/Footer';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StepContext } from './Form/StepContext'

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
				{/* bootsrap cdn */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
					crossorigin="anonymous"
				/>


				{/* slick slider cdn */}

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>

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
				<StepContext>
					<Component {...pageProps} />
				</StepContext>

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
