import React, {useRef} from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Divider,
  Grid,
  GridItem
} from '@chakra-ui/react';

const SerProPage = () => {

	// Ref for the Pro section
	const proSectionRef = useRef(null);

	const handleScrollToPro = () => {
    proSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      {/* Hero Section */}
			<Flex
				bg="orange.500"
				color="white"
				py={0}
				textAlign="center"
				align="center"
				justify="center"
				height='400'
				direction="column" // Ensure the contents are stacked vertically
			>
        <Heading fontSize="4xl">Tenha maior engajamento, se destaque!</Heading>

        <Text mt={4} fontSize="lg">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
        </Text>

				<HStack mt={6} spacing={6}>
					<Button mt={6} colorScheme="whiteAlpha" variant="outline" onClick={handleScrollToPro}>
						Saber mais
					</Button>

					<Button mt={6} ml={4} colorScheme="whiteAlpha" variant="solid">
						Tornar-se PRO
					</Button>
				</HStack>
			</Flex>

      {/* Section: Saia na frente */}
      <Box py={10} mt={12} textAlign="center" alignItems='center'>
        <VStack>

          <Grid templateColumns='repeat(2, 1fr)'>

            <GridItem>
              <Image
              borderRadius="full"
              boxSize="150px"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            </GridItem>

            <GridItem>
              <Text fontSize="2xl" fontWeight="bold">Saia na frente, tenha maior visibilidade.</Text>
              <Text maxW="600px" textAlign="center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </Text>
            </GridItem>

          </Grid>
        </VStack>
      </Box>

      {/* Section: Expanda seu portfólio */}
      <Box py={10} textAlign="center">
        <HStack spacing={6} justify="center">
          <VStack align="start" spacing={4}>
            <Heading fontSize="4xl" maxW="250px" mb={5} textAlign={'left'}>Expanda seu portfólio.</Heading>
            <Text maxW="600px" textAlign={'left'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </Text>
          </VStack>
          <Image
            borderRadius="md"
            boxSize="300px"
            src="https://via.placeholder.com/300"
            alt="Portfolio"
          />
        </HStack>
      </Box>

 {/* Planos */}
 <Box py={10} textAlign="center" ref={proSectionRef}>
        <Heading fontSize="2xl" mb={6}>O plano certo pra sua carreira.</Heading>
        <Flex justify="center">
          <Box border="1px" borderColor="gray.200" p={6} borderRadius="md" maxW="sm" mx={4}>
            <Heading fontSize="xl">Plano GRÁTIS</Heading>
            <VStack mt={4} spacing={3} align="start">
              <Text>✔ Postar trabalhos</Text>
              <Text>✔ Seguir perfis</Text>
              <Text>✔ Oportunidade de trabalho</Text>
              <Text>✘ Portfólio ilimitado</Text>
              <Text>✘ Lorem ipsum</Text>
              <Text>✘ Lorem ipsum</Text>
            </VStack>
          </Box>
          <Box bg="orange.500" color="white" p={6} borderRadius="md" maxW="sm" mx={4}>
            <Heading fontSize="xl">ar𝓆nex PRO</Heading>
            <Text fontSize="4xl" fontWeight="bold" mt={4}>R$ 20,00 /mês</Text>
            <VStack mt={4} spacing={3} align="start">
              <Text>✔ Postar trabalhos</Text>
              <Text>✔ Seguir perfis</Text>
              <Text>✔ Oportunidade de trabalho</Text>
              <Text>✔ Portfólio ilimitado</Text>
              <Text>✔ Lorem ipsum</Text>
              <Text>✔ Lorem ipsum</Text>
            </VStack>
            <Button mt={6} colorScheme="whiteAlpha" variant="solid">
              Tornar-se PRO
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SerProPage;
