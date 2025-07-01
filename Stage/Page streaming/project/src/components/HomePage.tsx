import Hero from './Hero';
import EventCalendar from './EventCalendar';
import Gallery from './Gallery';

interface HomePageProps {
  onRegisterClick: (eventId?: string) => void;
  onAccessClick: () => void;
}

export default function HomePage({ onRegisterClick, onAccessClick }: HomePageProps) {
  return (
    <>
      <section id="home">
        <Hero onRegisterClick={onRegisterClick} onAccessClick={onAccessClick} />
      </section>
      <section id="events">
        <EventCalendar onRegisterClick={onRegisterClick} />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </>
  );
}