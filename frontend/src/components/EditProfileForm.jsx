import React, { useRef, useContext, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Textarea, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { UserProfileContext } from './UserProfileContext';

const EditProfileForm = () => {
    const inputFile = useRef(null);
    const { profileImage, setProfileImage } = useContext(UserProfileContext);
    const [formData, setFormData] = useState({
        name: '',
        profileName: '',
        email: '',
        cep: '',
        street: '',
        number: '',
        city: '',
        phone: '',
        bio: '',
    });

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profileImage', file);
            try {
                const response = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setProfileImage(response.data.imageUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }

    const sendPhoto = () => {
        inputFile.current.click();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async () => {
        try {
            await axios.post('/api/profile', {
                ...formData,
                imageUrl: profileImage
            });
            alert('Perfil salvo com sucesso!');
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    }

    const logout = () => {
        // Implement logout functionality
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
                <Input name="name" placeholder='' value={formData.name} onChange={handleInputChange} />
            </Box>
            <Box>
                <Text>Nome de perfil</Text>
                <Input name="profileName" value={formData.profileName} onChange={handleInputChange} />
                <Text mt={2} color='gray.500'>URL: https://arqnex.com/nome_de_perfil</Text>
            </Box>
            <Box>
                <Text>Email</Text>
                <Input name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} />
            </Box>
            <HStack spacing={4}>
                <Box>
                    <Text>CEP</Text>
                    <Input name="cep" placeholder='00000-000' value={formData.cep} onChange={handleInputChange} />
                </Box>
                <Box>
                    <Text>Rua</Text>
                    <Input name="street" placeholder='' value={formData.street} onChange={handleInputChange} />
                </Box>
            </HStack>
            <HStack spacing={4}>
                <Box>
                    <Text>Número</Text>
                    <Input name="number" placeholder='000' value={formData.number} onChange={handleInputChange} />
                </Box>
                <Box>
                    <Text>Cidade</Text>
                    <Input name="city" placeholder='' value={formData.city} onChange={handleInputChange} />
                </Box>
            </HStack>
            <Box>
                <Text>Telefone</Text>
                <Input name="phone" placeholder='(00) 00 0 0000-0000' value={formData.phone} onChange={handleInputChange} />
            </Box>
            <Box>
                <Text>Biografia</Text>
                <Textarea name="bio" placeholder='Fale sobre você aqui' value={formData.bio} onChange={handleInputChange} />
            </Box>
            <Button colorScheme='orange' onClick={handleSubmit}>Salvar</Button>
        </Stack>
    );
}

export default EditProfileForm;
