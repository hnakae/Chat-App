import NextLink from "next/link";
import Image from "next/image";

import { Container, VStack, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} alignItems="stretch">
        <Navbar />
        <div>Helloooooo World!</div>
        <Divider />
        <Footer />
      </VStack>
    </Container>
  );
}
