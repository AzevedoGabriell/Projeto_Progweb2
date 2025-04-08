import HeroSection from './components/HeroSection';
import BookCarousel from './components/BookCarousel';
// import TestimonialSection from './components/TestimonialSection';
import AboutSection from './components/AboutSection';
// import EventsSection from './components/EventsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Publicações em Destaque</h2>
          <BookCarousel />
        </div>
      </section>

      <AboutSection />

      {/* <TestimonialSection />

      <EventsSection /> */}
    </>
  );
}