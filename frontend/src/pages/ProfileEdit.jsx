import React, { useState, useRef } from 'react';
import { Box, Button, Flex, HStack, Image, VStack, Heading, Text, Stack } from '@chakra-ui/react';
import EditProfileForm from '../components/EditProfileForm';
import ChangePasswordForm from '../components/ChangePasswordForm';
import InterestsForm from '../components/InterestsForm';
import FormationForm from '../components/FormationForm';
import CourseForm from '../components/CourseForm';
import ExperiencesForm from '../components/ExperiencesForm';

const EditProfile = (props) => {


    const [activeTab, setActiveTab] = useState('Perfil');

    const renderContent = () => {
        switch (activeTab) {
            case 'Perfil':
                return <EditProfileForm isLogged={props.isLogged} setIsLogged={props.setIsLogged} />;
            case 'Senha':
                return <ChangePasswordForm />;
            case 'Interesses':
                return <InterestsForm />;
            case 'Formações':
                return <FormationForm />;
            case 'Cursos':
                return <CourseForm />;
            case 'Experiências':
                return <ExperiencesForm />;                
            default:
                return null;
        }
    };

    return (
        <Box p={8} mr='10'>
            <Heading as="h1" mb={4}>Configurações de perfil</Heading>
            <Text mb={8} color="gray.500">Edite suas informações.</Text>
            <Flex>
                <VStack align="flex-start" spacing={4} width={{base: "100px", lg: "250px"}} borderRight="1px solid #EEEEEE" pr={4}>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Perfil')} colorScheme={activeTab === 'Perfil'? 'orange' : 'gray'}>Perfil</Button>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Senha')} colorScheme={activeTab === 'Senha'? 'orange' : 'gray'}>Senha</Button>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Interesses')} colorScheme={activeTab === 'Interesses'? 'orange' : 'gray'}>Interesses</Button>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Formações')} colorScheme={activeTab === 'Formações'? 'orange' : 'gray'}>Formações</Button>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Cursos')} colorScheme={activeTab === 'Cursos'? 'orange' : 'gray'}>Cursos</Button>
                    <Button justifyContent='flex-start' w='100%' variant="ghost" onClick={() => setActiveTab('Experiências')} colorScheme={activeTab === 'Experiências'? 'orange' : 'gray'}>Experiências</Button>
                </VStack>
                {renderContent()}
            </Flex>
        </Box>
    );
}

export default EditProfile;
