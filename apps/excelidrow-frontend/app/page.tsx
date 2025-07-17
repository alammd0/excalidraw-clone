import React from 'react';
import { 
  Palette, 
  Users, 
  Zap, 
  Shield, 
  Download, 
  Star,
  ArrowRight,
  Play,
  Check,
  Menu,
  X,
  Pencil,
  Share,
  Cloud
} from 'lucide-react';
import { Header } from '@/components/home/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { Testimonials } from '@/components/home/Testimonials';
import { Pricing } from '@/components/home/PricingSection';
import { CTASection } from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';

function App() {

  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <CTASection />
     
      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default App;