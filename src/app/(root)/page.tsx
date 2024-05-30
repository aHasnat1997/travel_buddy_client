import { Box } from "@mui/material";
import Hero from "./components/Hero";
import PopularDestination from "./components/PopularDestination";
import About from "./components/About";

function Home() {
  return (
    <Box position='relative'>
      <Hero />
      <PopularDestination />
      <About />
    </Box>
  );
}

export default Home;