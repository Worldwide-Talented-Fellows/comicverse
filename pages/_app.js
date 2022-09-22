import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <SessionProvider>
            {router.pathname !== '/redirect' && <Navbar />}
            <Component {...pageProps} />
            {router.pathname !== '/redirect' && <Footer />}
        </SessionProvider>
    );
}

export default MyApp;
