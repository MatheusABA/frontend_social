import React, { useRef, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Textarea, HStack, Image, Stack, Text, Avatar, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { UserProfileContext } from './UserProfileContext';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../api/auth';

const EditProfileForm = (props) => {
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
        biography: ''
    });



    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 104857600) { // Limite de 100MB
            setProfileImage(file);
        } else {
            alert('O arquivo é muito grande. O tamanho máximo permitido é de 100MB.');
        }
        console.log(profileImage)
    };

    const handleLogout = () => {
        removeToken();
        props.setIsLogged(false);
        navigate("/");
    };

    const getInfoProfile = async () => {
        try {
            const token = getToken();
            console.log("Token:", token);

            const response = await axios.get('http://18.117.170.99:3050/user/info-profile/', {
                headers: {
                    Authorization: `${token}`
                }
            });

            console.log('Resposta:', response)

            const userData = response.data.user;
            
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
            };

            console.log(formDataToSend)

            await axios.put('http://18.117.170.99:3050/user/update', formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `${token}`
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
        let newCep = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
        if (newCep.length > 5) {
            newCep = `${newCep.slice(0, 5)}-${newCep.slice(5)}`;
        }
    
        setFormData({ ...formData, cep: newCep });
    
        if (newCep.length === 9) { // Considerando o traço, o CEP tem 9 caracteres
            const cleanedCep = newCep.replace('-', '');
            try {
            const response = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`);
            const { logradouro, localidade } = response.data;
            setFormData({
                ...formData,
                cep: newCep,
                street: logradouro,
                city: localidade,
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
                        <Avatar boxSize='100px' src={profileImage} alt='Profile Image' name={formData.nameUser} />
                        <Button onClick={() => document.getElementById('fileInput').click()} colorScheme='orange'>Alterar foto de perfil</Button>
                        <Button onClick={setProfileImage(null)}>Deletar</Button>
                        <Button ml='20vw' onClick={handleLogout}>Desconectar</Button>
                        <input id='fileInput' type="file" onChange={handleFileUpload} style={{ display: 'none' }} accept="image/png, image/jpeg" />
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
