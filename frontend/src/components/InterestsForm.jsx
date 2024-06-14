import React, { useState } from "react";
import { Box, Flex, VStack, HStack, Text, ButtonGroup, IconButton, Select, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import EditProfileForm from "../components/EditProfileForm";
import ChangePasswordForm from "../components/ChangePasswordForm";
import InterestsForm from "../components/InterestsForm";

const EditProfile = () => {
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);

  const handleSelectSoftware = (e) => {
    const software = e.target.value;
    if (software && !selectedSoftwares.includes(software)) {
      setSelectedSoftwares([...selectedSoftwares, software]);
    }
    setSelectedSoftware(""); // Reset select
  };

  const handleRemoveSoftware = (softwareToRemove) => {
    setSelectedSoftwares(selectedSoftwares.filter((software) => software !== softwareToRemove));
  };

  const renderSelectedSoftwareGroups = () => {
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

  return (
    <Box p={8} mr="10">
      <Flex direction={'column'}>
        <VStack align="flex-start" spacing={4} width={{ base: "100px", lg: "250px" }} borderBottom="1px solid #EEEEEE" pb={4}>
          {/* Select para selecionar softwares */}
          <Select value={selectedSoftware} onChange={handleSelectSoftware}>
            <option value="">Selecione um software</option>
            <option value="Software1">Software 1</option>
            <option value="Software2">Software 2</option>
            <option value="Software3">Software 3</option>
          </Select>
        </VStack>
        {/* Exibição dos grupos de botões de software selecionados */}
        <HStack spacing={4} align="flex-start" mt='3'>
          {renderSelectedSoftwareGroups()}
        </HStack>
      </Flex>
    </Box>
  );
};

export default EditProfile;
