import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, HStack, Flex, Image, Box, Text, Button, Wrap, WrapItem, Skeleton, IconButton, useToast } from '@chakra-ui/react'
import PostModal from '../components/PostModal'
import { UserProfileContext } from '../components/UserProfileContext';
import { getToken, removeToken } from '../api/auth';
import axios from 'axios'


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

    return (
        <HStack px={50} py={'20vh'} spacing={'5vw'} alignItems={'flex-start'}>
            <Skeleton isLoaded={!isLoading}>
                <Box borderWidth={'1px'} position={'relative'} borderTopRadius={7} borderColor='#EEEEEEE' maxW={'30vw'}>
                    <Image src={profileImage}  alt="Example" w={"400px"} h={"456px"} objectFit={'cover'} borderTopRadius={7}/>
                    <Button position="absolute" top='10px' right='10px' zIndex="1"  w={"85px"} h={"40px"} bgColor="#FFFFFF" borderWidth='1' borderColor='#EEEEEE' onClick={editProfile}>
                        Editar
                    </Button>
                    <Stack maxW='400px' px='2vh' spacing='5'>
                        <Flex direction='column' justify='space-between' alignItems='center' mt='2'>
                            <Text fontSize="24px" fontWeight="bold" mt="38px">
                                Nome Usuário
                            </Text>
                            <Text fontSize="24px" fontWeight="medium" color="#1D252C61">
                                Cidade
                            </Text>
                            <Text fontSize="20px" fontWeight="regular" color="#1D252C" textAlign='center' pt='10'>
                                Biografia
                            </Text>
                        </Flex>
                    </Stack>
                    <Stack spacing='10' mt='35' px='2vh' mb='10'>
                        <Text textAlign='left' fontSize="20px" fontWeight="bold">
                            Softwares
                        </Text>
                        <HStack>
                            <Button>
                                <Image src='../images/vray-icone.png' boxSize='30px' alt='V-Ray' mr='8px' />
                                VRay
                            </Button>
                        </HStack>
                    </Stack>
                </Box>
            </Skeleton>
            <Wrap spacing={10}  maxW={'75vw'}>
                {/* Realizar o .map para cada post do usuário dentro de um WrapItem alterando o src da Image */}
                {posts.map((post) => {
                    return (
                        <PostModal post={post} user={user} />
                    )
                })}
            </Wrap>
        </HStack>
    )
}

export default Perfil