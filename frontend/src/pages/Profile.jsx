import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, HStack, Flex, Image, Box, Text, Button, Wrap, VStack, WrapItem, Skeleton, IconButton, useToast } from '@chakra-ui/react'
import PostModal from '../components/PostModal'
import { UserProfileContext } from '../components/UserProfileContext';
import { getToken, removeToken } from '../api/auth';
import axios from 'axios'
import VRay from '../images/V-Ray.png'
import AutoCad from '../images/AutoCad.png'
import Adobe from '../images/Adobe.png'


const Perfil = (props) => {

    props.setIsUpload(false)
    const navigate = useNavigate();
    const { profileImage } = useContext(UserProfileContext);

    const [isLoading, setiIsloading] = useState(false)

    const toast = useToast();
    // Realizar um await fetch na tabela de postagens e alterar os recebimentos
    // const { image, description, softwares, data } = await fetch(posts) algo do tipo

    useEffect(() => {
        getPostInfo();
    }, []);
    
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});

    const getPostInfo = async () => {
        try {
            const token = getToken();
            console.log("Token:", token);
            
            const response = await axios.get('http://18.117.170.99:3050/user/user-posts/', {
                headers: {
                    Authorization: `${token}`
                }
            });

            // console.log('Resposta:', response.data)
            // console.log('Status:', response.status)

            setPosts(response.data.posts);
            setUser(response.data.user);

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

    const editProfile = (props) => {
        // const userId = localStorage()
        navigate(`/editprofile`)

    }

    const softwareIcons = {
        Adobe: Adobe,
        VRay: VRay,
        AutoCad: AutoCad,
        // Adicione aqui outros softwares com suas respectivas imagens
    };

    /* ------ Pegar informações do perfil -----*/
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

    return (
        <VStack spacing='2vh'>
            <Flex justify={'flex-end'} w='80%' fontSize={'24px'} mt={'12vh'}>
                    <HStack spacing={2} >
                        <Text fontWeight={'bold'} >{posts.length}</Text>
                        <Text fontColor='#00000061' mr='10px'>Trabalhos</Text>
                    </HStack>
                    <HStack spacing={2}>
                        {/* Adaptar para seguidores */}
                        <Text fontWeight={'bold'} ml='10px'>{posts.length}</Text>
                        <Text fontColor='#00000061' mr='5px'>Seguidores</Text>
                    </HStack>
                </Flex>
                <HStack px={50} py={'2vh'} spacing={'5vw'} alignItems={'flex-start'}>
            <Skeleton isLoaded={!isLoading}>
                <Box borderWidth={'1px'} position={'relative'} borderTopRadius={7} borderColor='#EEEEEEE' maxW={'30vw'}>
                    <Image src={profileImage}  alt="Example" w={"400px"} h={"456px"} objectFit={'cover'} borderTopRadius={7}/>
                    <Button position="absolute" top='10px' right='10px' zIndex="1"  w={"85px"} h={"40px"} bgColor="#FFFFFF" borderWidth='1' borderColor='#EEEEEE' onClick={editProfile}>
                        Editar
                    </Button>
                    <Stack maxW='400px' px='2vh' spacing='5'>
                        <Flex direction='column' justify='space-between' alignItems='center' mt='2'>
                            <Text fontSize="24px" fontWeight="bold" mt="38px">
                                {formData.nameUser}
                            </Text>
                            <Text fontSize="24px" fontWeight="medium" color="#1D252C61">
                                {formData.city}
                            </Text>
                            <Text fontSize="20px" fontWeight="regular" color="#1D252C" textAlign='center' pt='10'>
                                {formData.biography}
                            </Text>
                        </Flex>
                    </Stack>
                    <Stack spacing='10' mt='35' px='2vh' mb='10'>
                        <Text textAlign='left' fontSize="20px" fontWeight="bold">
                            Softwares
                        </Text>
                        <HStack>
                            {posts.forEach((post) => {
                                const softwares = JSON.parse(post.softwares)
                                softwares.map((software) => {
                                    return (
                                    <Button mx='5px' bg='#f7f7f7' _hover={{cursor: 'default'}} _active={{bg: '#f0f0f0',transform: 'scale(0.98)',borderColor: '#bec3c9',}}>
                                        <Image src={softwareIcons[software]} boxSize='30px' alt={software} mr='8px'  />
                                        {software}
                                    </Button>)
                                })
                            })}
                        </HStack>
                    </Stack>
                </Box>
            </Skeleton>
            <VStack spacing='3rem'>
                <Wrap spacing={5}  maxW={'90vw'}>
                    {/* Realizar o .map para cada post do usuário dentro de um WrapItem alterando o src da Image */}
                    {posts.map((post) => {
                        return (
                            <PostModal post={post} user={user} />
                        )
                    })}
                </Wrap>
            </VStack>
        </HStack>
        </VStack>
    )
}

export default Perfil