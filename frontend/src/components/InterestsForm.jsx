import React, { useState } from "react";
import { Box, Flex, VStack, HStack, Text, ButtonGroup, IconButton, Select, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";


const InterestsForm = () => {
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);
  const [selectedInteresse, setSelectedInteresse] = useState("");
  const [selectedInteresses, setSelectedInteresses] = useState([]);

  const handleSelectSoftware = (e) => {
    const software = e.target.value;
    if (software && !selectedSoftwares.includes(software)) {
      setSelectedSoftwares([...selectedSoftwares, software]);
    }
    setSelectedSoftware(""); // Reset select
  };
  
  const handleSelectInteresse = (e) => {
    const interesse = e.target.value;
    if (interesse && !selectedInteresses.includes(interesse)) {
      setSelectedInteresses([...selectedInteresses, interesse]);
    }
    setSelectedInteresse(""); // Reset select
  };

  const handleRemoveSoftware = (softwareToRemove) => {
    setSelectedSoftwares(selectedSoftwares.filter((software) => software !== softwareToRemove));
  };

  const handleRemoveInteresse = (interesseToRemove) => {
    setSelectedInteresses(selectedInteresses.filter((interesse) => interesse !== interesseToRemove));
  };

  const renderSelectedSoftwaresGroups = () => {
      return selectedSoftwares.map((software) => (
      <ButtonGroup key={software} isAttached variant="outline" mb={2}>
        <Button leftIcon={<img src={`path/to/${software}.png`} alt={software} width="20" />} isDisabled>
          {software}
        </Button>
        <IconButton
          aria-label={`Remover ${software}`}
          icon={<CloseIcon />}
          onClick={() => handleRemoveSoftware(software)}
        />
      </ButtonGroup>
    ));    
  };

  const renderSelectedInteressesGroups = () => {
    return selectedInteresses.map((interesse) => (
        <ButtonGroup key={interesse} isAttached variant="outline" mb={2}>
          <Button isDisabled>
            {interesse}
          </Button>
          <IconButton
            aria-label={`Remover ${interesse}`}
            icon={<CloseIcon />}
            onClick={() => handleRemoveInteresse(interesse)}
          />
        </ButtonGroup>
      ));
  };
  return (
    <Box p={8} mr="10">
      <Flex direction={'column'}>
        <VStack align="flex-start" spacing={4} width={{ base: "100px", lg: "250px" }} pb={4}>
          {/* Select para selecionar softwares */}
          <Select value={selectedSoftware} onChange={handleSelectSoftware}>
            <option value="">Selecione um software</option>
            <option value="V-Ray">V-Ray</option>
            <option value="AutoCad">AutoCad</option>
            <option value="Adobe">Adobe</option>
          </Select>
        </VStack>
        {/* Exibição dos grupos de botões de software selecionados */}
        <HStack spacing={4} align="flex-start" my='3' minH='5vh' borderBottom="1px solid #EEEEEE">
          {renderSelectedSoftwaresGroups('Softwares')}
        </HStack>
      </Flex>
      <Flex direction={'column'}>
        <VStack align="flex-start" spacing={4} width={{ base: "100px", lg: "250px" }} pb={4}>
          {/* Select para selecionar Interesses */}
          <Select value={selectedInteresse} onChange={handleSelectInteresse}>
            <option value="">Selecione um interesse</option>
            <option value="Contemporâneo">Contemporâneo</option>
            <option value="Clássico">Clássico</option>
            <option value="Moderno">Moderno</option>
          </Select>
        </VStack>
        {/* Exibição dos grupos de botões de software selecionados */}
        <HStack spacing={4} align="flex-start" mt='3' minH='5vh' borderBottom="1px solid #EEEEEE">
          {renderSelectedInteressesGroups('Interesses')}
        </HStack>
      </Flex>
      <Button mt={2} colorScheme='orange' minW={'20vw'} maxW={'20vw'}>Salvar</Button>
    </Box>
  );
};

export default InterestsForm;
