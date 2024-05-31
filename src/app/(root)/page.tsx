import { Box } from "@mui/material";
import Hero from "./components/Hero";
import PopularDestination from "./components/PopularDestination";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function Home() {
  return (
    <Box position='relative'>
      <Hero />
      <PopularDestination />
      <About />
      <Testimonials />
    </Box>
  );
}

export default Home;