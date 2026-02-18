import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { PromosSection } from '@/components/home/PromosSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <PromosSection />
      <CTASection />
    </Layout>
  );
};

export default Index;