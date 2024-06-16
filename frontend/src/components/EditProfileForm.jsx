import React, { useState, useRef } from 'react';

import { Box, Button, Input, Textarea, Flex, HStack, Image, VStack, Heading, Text, Stack } from '@chakra-ui/react';

const EditProfileForm = () => {

    const inputFile = useRef(null);
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

    const handleFileUpload = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const sendPhoto = () => {
        inputFile.current.click();
    }

    const logout = () => {

    }

    const handleSubmit = () => {
        
    }

    return (
        <Stack spacing={4} mt={'5vh'} mx={'5vw'}>
            <Box flex="1" pl={1}>
                <HStack spacing={4} mb={8}>
                    <Image borderRadius='full' boxSize='100px' src={profileImage} alt='Profile Image' />
                    <Button onClick={sendPhoto} colorScheme='orange'>Alterar foto de perfil</Button>
                    <Button>Deletar</Button>
                    <Button ml='20vw' onClick={logout}>Desconectar</Button>
                    <input type="file" ref={inputFile} onChange={handleFileUpload} style={{ display: 'none' }} />
                </HStack>
            </Box>
            <Box>
                <Text>Nome</Text>
                <Input placeholder='' />
            </Box>
            <Box>
                <Text>Nome de perfil</Text>
                <Input/>
                <Text mt={2} color='gray.500'>URL: https://arqnex.com/nome_de_perfil</Text>
            </Box>
            <Box>
                <Text>Email</Text>
                <Input placeholder='Email' />
            </Box>
            <HStack spacing={4}>
                <Box>
                    <Text>CEP</Text>
                    <Input placeholder='00000-000' />
                </Box>
                <Box>
                    <Text>Rua</Text>
                    <Input placeholder='' />
                </Box>
            </HStack>
            <HStack spacing={4}>
                <Box>
                    <Text>Número</Text>
                    <Input placeholder='000' />
                </Box>
                <Box>
                    <Text>Cidade</Text>
                    <Input placeholder='' />
                </Box>
            </HStack>
            <Box>
                <Text>Telefone</Text>
                <Input placeholder='(00) 00 0 0000-0000' />
            </Box>
            <Box>
                <Text>Biografia</Text>
                <Textarea placeholder='Fale sobre você aqui' />
            </Box>
            <Button colorScheme='orange'>Salvar</Button>
        </Stack>
    );
}

export default EditProfileForm;
