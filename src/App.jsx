import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Endpoints from "./components/Endpoints";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Badges from "./components/Badges";
import LiveExample from "./components/LiveExample";
import Docs from "./components/Docs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <LiveExample/>
      <Endpoints />
      <Docs/>
      <CTA />
      <Footer />
    </>
  );
}
