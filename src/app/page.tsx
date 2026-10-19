import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WritingPreview from "@/components/home/WritingPreview";
import Books from "@/components/home/Books";
import Research from "@/components/home/Research";
import Sessions from "@/components/home/Sessions";
import RoundTables from "@/components/home/RoundTables";
import Webinars from "@/components/home/Webinars";
import Mentorship from "@/components/home/Mentorship";
import Talks from "@/components/home/Talks";
import BenchNotes from "@/components/home/BenchNotes";
import Gallery from "@/components/home/Gallery";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <WritingPreview />
      <Books />
      <Research />
      <Sessions />
      <RoundTables />
      <Webinars />
      <Mentorship />
      <Talks />
      <BenchNotes />
      <Gallery />
      <Newsletter />
    </main>
  );
}