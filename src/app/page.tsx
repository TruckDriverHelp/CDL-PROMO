import { ContactUs } from '@/views/contact-us';
import { Footer } from '@/views/footer/footer';
import { Header } from '@/views/header';
import { MainAdvantages } from '@/views/main-advantages';
import { PartnershipBenefits } from '@/views/partnership-benefits';
import { PartnershipProgram } from '@/views/partnership-program';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainAdvantages />
        <PartnershipBenefits />
        <PartnershipProgram />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
