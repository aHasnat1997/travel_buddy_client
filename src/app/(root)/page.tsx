import { Box } from "@mui/material";
import Hero from "./components/Hero";
import PopularDestination from "./components/PopularDestination";

function Home() {
  return (
    <Box position='relative'>
      <Hero />
      <PopularDestination />
    </Box>
  );
}

export default Home;