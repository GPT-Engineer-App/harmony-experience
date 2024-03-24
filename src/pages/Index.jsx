import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const tourDates = [
    { date: "July 10", venue: "Madison Square Garden", city: "New York, NY" },
    { date: "July 15", venue: "Staples Center", city: "Los Angeles, CA" },
    { date: "July 20", venue: "United Center", city: "Chicago, IL" },
    { date: "July 25", venue: "TD Garden", city: "Boston, MA" },
  ];

  return (
    <Box>
      <Box backgroundImage="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzExMjk0OTkxfDA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="4xl" color="white" mb={4}>
            The Rockstars World Tour
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Get ready for an unforgettable night of rock music!
          </Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="red" as={Link} href="#tickets">
            Get Tickets
          </Button>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Heading as="h2" size="2xl" mb={10}>
          Tour Dates
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {tourDates.map((date, index) => (
            <Box key={index} p={6} boxShadow="md" rounded="md">
              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {date.date}
              </Text>
              <Text fontSize="xl">{date.venue}</Text>
              <Text fontSize="lg" color="gray.500">
                {date.city}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                About The Band
              </Heading>
              <Text fontSize="lg" mb={6}>
                The Rockstars are a legendary rock band known for their high-energy performances and chart-topping hits. With a career spanning over two decades, they continue to captivate audiences worldwide.
              </Text>
              <Button leftIcon={<FaMusic />} colorScheme="blue" as={Link} href="#music">
                Listen to Music
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1519175182139-86e3bc09d7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTI5NDk5MXww&ixlib=rb-4.0.3&q=80&w=1080" rounded="md" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Follow Us
        </Heading>
        <Stack direction="row" spacing={8} justifyContent="center">
          <Link href="#instagram">
            <FaInstagram size={32} />
          </Link>
          <Link href="#twitter">
            <FaTwitter size={32} />
          </Link>
          <Link href="#facebook">
            <FaFacebook size={32} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
