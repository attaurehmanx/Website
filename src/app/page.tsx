import Navbar from '@/app/component/Navbar';
import Hero from '@/app/component/Hero';

import Contact from '@/app/component/Contact';
import Footer from '@/app/component/Footer';
export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
   <Navbar />
   <Hero />
   
   <Contact />
   <Footer />
   </div>
  );
}
