import React, { useRef, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Textarea, HStack, Image, Stack, Text, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { UserProfileContext } from './UserProfileContext';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../api/auth';

const EditProfileForm = (props) => {
    const inputFile = useRef(null);
    const { profileImage, setProfileImage } = useContext(UserProfileContext);
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        getInfoProfile();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        profileName: '',
        email: '',
        cep: '',
        street: '',
        number: '',
        city: '',
        phone: '',
        bio: ''
    });

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

    const handleLogout = () => {
        props.setIsLogged(false);
        navigate("/");
    };

    const sendPhoto = () => {
        inputFile.current.click();
    }

    const getInfoProfile = async (e) => {
        try {
            const token = getToken();
            const response = await axios.get('http://3.12.149.2:3050/user/info-profile/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const { userData } = response;

            setFormData({
                name: userData.name,
                profileName: userData.profileName,
                email: userData.email,
                cep: userData.cep,
                street: userData.street,
                number: userData.number,
                city: userData.city,
                phone: userData.phone,
                bio: userData.bio
            });            

        } catch (e) {
            toast({
                title: "Erro ao carregar informações de perfil.",
                description: "Ocorreu um erro ao tentar carregar seu perfil.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }

    }


    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            // Enviar os dados do formulário para o servidor
            await axios.post('http://3.12.149.2:3050/user/info-profile', formData);
            toast({
                title: "Perfil atualizado.",
                description: "Seu perfil foi atualizado com sucesso.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Erro ao atualizar perfil:", error);
            toast({
                title: "Erro ao atualizar perfil.",
                description: "Ocorreu um erro ao tentar atualizar seu perfil.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }

    const handleCepChange = async (e) => {
        const newCep = e.target.value;
        setFormData({ ...formData, cep: newCep });

        if (newCep.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${newCep}/json/`);
                const { logradouro, localidade } = response.data;
                setFormData({
                    ...formData,
                    street: logradouro,
                    city: localidade
                });
            } catch (error) {
                console.error("Erro ao buscar CEP:", error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} mt={'5vh'} mx={'5vw'}>
                <Box flex="1" pl={1}>
                    <HStack spacing={4} mb={8}>
                        <Image borderRadius='full' boxSize='100px' src={profileImage} alt='Profile Image' />
                        <Button onClick={sendPhoto} colorScheme='orange'>Alterar foto de perfil</Button>
                        <Button>Deletar</Button>
                        <Button ml='20vw' onClick={handleLogout}>Desconectar</Button>
                        <input type="file" ref={inputFile} onChange={handleFileUpload} style={{ display: 'none' }} />
                    </HStack>
                </Box>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=''
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Nome de perfil</FormLabel>
                    <Input
                        name="profileName"
                        value={formData.profileName}
                        onChange={handleChange}
                    />
                    <Text mt={2} color='gray.500'>URL: https://arqnex.com/{formData.profileName}</Text>
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </FormControl>
                <HStack spacing={4}>
                    <FormControl>
                        <FormLabel>CEP</FormLabel>
                        <Input
                            name="cep"
                            value={formData.cep}
                            onChange={handleCepChange}
                            placeholder='00000-000'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Rua</FormLabel>
                        <Input
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            placeholder=''
                        />
                    </FormControl>
                </HStack>
                <HStack spacing={4}>
                    <FormControl>
                        <FormLabel>Número</FormLabel>
                        <Input
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder='000'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Cidade</FormLabel>
                        <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder=''
                        />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='(00) 00 0 0000-0000'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Biografia</FormLabel>
                    <Textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder='Fale sobre você aqui'
                    />
                </FormControl>
                <Button colorScheme='orange' type="submit">Salvar</Button>
            </Stack>
        </form>
    );
}

export default EditProfileForm;
