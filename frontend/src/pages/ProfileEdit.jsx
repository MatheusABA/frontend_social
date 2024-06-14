import React, { useState, useRef } from 'react';
import { Box, Button, Flex, HStack, Image, VStack, Heading, Text, Stack } from '@chakra-ui/react';
import EditProfileForm from '../components/EditProfileForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import InterestsForm from '../components/InterestsForm';

const EditProfile = () => {


    const [activeTab, setActiveTab] = useState('Perfil');



    const renderContent = () => {
        switch (activeTab) {
            case 'Perfil':
                return <EditProfileForm ml={2} />;
            case 'Senha':
                return <ChangePasswordForm />;
            case 'Interesses':
                return <InterestsForm />;

            default:
                return null;
        }
    };

    return (
        <Box p={8}>
            <Heading as="h1" mb={4}>Configurações de perfil</Heading>
            <Text mb={8} color="gray.500">Edite suas informações.</Text>
            <Flex>
                <VStack align="flex-start" spacing={4} width="250px" borderRight="1px solid #EEEEEE" pr={4}>
                    <Button variant="ghost" onClick={() => setActiveTab('Perfil')}>Perfil</Button>
                    <Button variant="ghost" onClick={() => setActiveTab('Senha')}>Senha</Button>
                    <Button variant="ghost" onClick={() => setActiveTab('Interesses')}>Interesses</Button>
                    <Button variant="ghost" onClick={() => setActiveTab('Formações')}>Formações</Button>
                    <Button variant="ghost" onClick={() => setActiveTab('Cursos')}>Cursos</Button>
                    <Button variant="ghost" onClick={() => setActiveTab('Experiências')}>Experiências</Button>
                </VStack>
                {renderContent()}
            </Flex>
        </Box>
    );
}

export default EditProfile;
