import { ContactUs } from '@/views/contact-us';
import { FAQ } from '@/views/faq';
import { Footer } from '@/views/footer/footer';
import { Header } from '@/views/header';
import { MainAdvantages } from '@/views/main-advantages';
import { PartnershipBenefits } from '@/views/partnership-benefits';
import { PartnershipProgram } from '@/views/partnership-program';
import { Promo } from '@/views/promo';

// "HomePage": {
//   "MainAdvantages": {
//     "title": "s"
//   }
// },

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainAdvantages />
        <PartnershipBenefits />
        <PartnershipProgram />
        <ContactUs />
        <FAQ />
        <Promo />
      </main>
      <Footer />
    </>
  );
}
