import HeroSection from "@/components/UI/HomePage/HeroSection";
import AllPets from "@/components/UI/HomePage/Pets/AllPets";
import {Button, Container, Typography} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    // <Container>
    <>
      <HeroSection />
      <AllPets />
    </>
    // </Container>
  );
}
