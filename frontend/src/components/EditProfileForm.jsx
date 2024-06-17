import React, { useRef, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Textarea, HStack, Image, Stack, Text, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { UserProfileContext } from './UserProfileContext';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../api/auth';

const EditProfileForm = (props) => {
    const inputFile = useRef(null);
    const { profileImage, setProfileImage } = useContext(UserProfileContext);
    const navigate = useNavigate();
    const toast = useToast();
    const token = getToken();

    useEffect(() => {
        getInfoProfile();
    }, []);
    
    const [formData, setFormData] = useState({
        id: '',
        nameUser: '',
        profileName: '',
        email: '',
        cep: '',
        street: '',
        streetNumber: '',
        city: '',
        telephone: '',
        biography: '',
        photo: ''
    });



    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                setFormData({ ...formData, photo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        removeToken();
        props.setIsLogged(false);
        navigate("/");
    };

    const sendPhoto = () => {
        inputFile.current.click();
    };

    const getInfoProfile = async () => {
        try {
            const token = getToken();
            console.log("Token:", token);

            const response = await axios.get('http://3.12.149.2:3050/user/info-profile/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Resposta:', response)

            const userData = response.data;
            
            console.log("Dados do Usuario:", userData);

            setFormData({
                id: userData.id,
                nameUser: userData.nameUser,
                profileName: userData.profileName,
                email: userData.email,
                cep: userData.cep,
                street: userData.street,
                streetNumber: userData.streetNumber,
                city: userData.city,
                telephone: userData.telephone,
                biography: userData.biography,
                photo: userData.photo
            });


        } catch (e) {
            toast({
                title: "Erro ao carregar informações de perfil.",
                description: "Ocorreu um erro ao tentar carregar seu perfil.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            console.error("Erro ao carregar perfil:", e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = {
                id: formData.id,
                nameUser: formData.nameUser,
                profileName: formData.profileName,
                email: formData.email,
                cep: formData.cep,
                street: formData.street,
                streetNumber: formData.streetNumber,
                city: formData.city,
                telephone: formData.telephone,
                biography: formData.biography,
                photo: formData.photo
            };

            await axios.post('http://3.12.149.2:3050/user/info-profile', formDataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

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
    };

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
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
                        name="nameUser"
                        value={formData.nameUser}
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
                            name="streetNumber"
                            value={formData.streetNumber}
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
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder=''
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Biografia</FormLabel>
                    <Textarea
                        name="biography"
                        value={formData.biography}
                        onChange={handleChange}
                        placeholder=''
                    />
                </FormControl>
                <Button colorScheme='orange' mt={4} type="submit">
                    Salvar
                </Button>
            </Stack>
        </form>
    );
};

export default EditProfileForm;
