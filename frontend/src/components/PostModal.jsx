import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WrapItem, useToast, VStack, Avatar, Flex, Image, Box, Text, Button ,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { getToken, removeToken } from '../api/auth';
import axios from 'axios';

const PostModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    // Realizar um await fetch na tabela de postagens e alterar os recebimentos
    // const { image, description, softwares, data } = await fetch(posts) algo do tipo

    useEffect(() => {
        getPostInfo();
    }, []);
    
    const [formData, setFormData] = useState({
        userId: '',
        titlePost:'',
        softwares: [],
        styles: '',
        projects: '',
        types: '',
        descriptionPost: '',
        createdAt: '',
        imageURL: ''
    });

    const getPostInfo = async () => {
        try {
            const token = getToken();
            console.log("Token:", token);

            const response = await axios.get('http://18.117.170.99:3050/user/post/', {
                headers: {
                    Authorization: `${token}`
                }
            });

            console.log('Resposta:', response)

            const postData = response.data.user;
            
            console.log("Dados da postagem", postData);

            setFormData({
                userId: postData.Id,
                titlePost: postData.titlePost,
                softwares: postData.softwares,
                styles: postData.styles,
                projects: postData.projects,
                types: postData.types,
                descriptionPost: postData.descriptionPost,
                createdAt: postData.createdAt,
                imageURL: postData.imageURL
            });


        } catch (e) {
            toast({
                title: "Erro ao carregar informações da postagem.",
                description: "Ocorreu um erro ao tentar carregar essa postagem.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            console.error("Erro ao carregar postagem:", e);
        }
    };

    // usado para navegar entre paginas e mandar `estados` - 
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    return (
        <>
            <WrapItem >
                <Box borderWidth='1px' borderColor={'#AEAEAE'} borderTopRadius={7} w={250} h={250} onClick={onOpen} _hover={{cursor: 'pointer'}}>
                    <Image src={formData.imageURL} objectFit={'cover'} borderTopRadius={7} />    
                </Box>
            </WrapItem>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={'lg'} >
            <ModalOverlay backdropFilter='auto' backdropBlur='5px'/>
            <ModalHeader>
                <Flex>
                    <Avatar name={'user'} src={formData.imageURL} />
                    <VStack spacing={4}>
                        <Text fontWeight={'bold'} fontSize={'24px'}>Lorem Ipsum dolor sit amet</Text>
                        <Text color={'#1D252C3D'} fontSize={'20px'}>
                            Por
                            <Text fontSize={'20px'} color={'#db752c'}>{'userName'}</Text>
                        </Text>
                    </VStack>
                </Flex>
            </ModalHeader>
            <ModalContent >
                <ModalCloseButton color={'white'} />
                <Box backgroundSize="cover" backgroundPosition="center" w={'50vw'} h={'50vh'} display={"flex"} alignItems="center" justifyContent="center" borderTopRadius="5px">
                    <Image src={'../images/image_1.png'} />
                    <Text flexWrap={'wrap'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor. </Text>
                    <Flex>
                        <Button>
                            <Image src='../images/vray-icone.png' boxSize='30px' alt='V-Ray' mr='8px' />
                            VRay
                        </Button>
                    </Flex>
                </Box>
            </ModalContent>
            </Modal>
    </>
    )
}

export default PostModal