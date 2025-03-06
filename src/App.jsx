import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/features";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";

/**
 * Main application component that renders the entire UI.
 * @returns {JSX.Element} The root component containing all sections.
 */
const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
