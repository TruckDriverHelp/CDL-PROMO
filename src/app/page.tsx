import { Footer } from '@/views/footer/footer';
import { Header } from '@/views/header';
import { MainAdvantages } from '@/views/main-advantages';
import { PartnershipBenefits } from '@/views/partnership-benefits';

export default function Home() {
  return (
    <>
      <Header />
      <MainAdvantages />
      <PartnershipBenefits />
      <Footer />
    </>
  );
}
