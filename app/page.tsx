import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SessionDetails from './components/SessionDetails';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <SessionDetails /> {/* <-- Add it here */}
      <FAQ />
      <ContactForm />
      <Footer/>
    </main>
  );
}
