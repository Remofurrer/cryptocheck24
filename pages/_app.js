import '../styles/globals.css'
import Script from 'next/script';
import Footer from './components/Footer'
import Navbar from './components/Navbar'



function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script 
      strategy="lazyOnload"
      src={'https://www.googletagmanager.com/gtag/js?id=G-WPW6G3YX1M'}
    />

    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WPW6G3YX1M');
              `}
    </Script>

    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
