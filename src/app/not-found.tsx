import NotFountAnimations from "@/components/LottieAnimations/NotFountAnimations";
import { Button } from "@mui/material";
import Link from "next/link";

function NotFound() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <NotFountAnimations />
      <Link href='/'>
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
}

export default NotFound;