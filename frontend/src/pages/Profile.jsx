import React, { useState, useContext } from 'react'
import { Link as Reactlink, useNavigate } from 'react-router-dom'
import { Stack, HStack, Flex, Image, Box, Text, Button, Badge, Wrap, WrapItem, Skeleton, IconButton } from '@chakra-ui/react'
import PostModal from '../components/PostModal'
import { UserProfileContext } from '../components/UserProfileContext';


const Perfil = (props) => {

    props.setIsUpload(false)
    const navigate = useNavigate();
    const { profileImage } = useContext(UserProfileContext);

    const [isLoading, setiIsloading] = useState(false)

    // useEffect(() => {
    //     // Pegar postagens e salvar em variável
    //     return () => {
    //         second
    //     }
    // }, [])

    const editProfile = (props) => {
        // const userId = localStorage()
        navigate(`/editprofile`)

    }


    const getUserData = () => {
        // puxa informações do BD
    }

    return (
        <HStack px={50} py={'20vh'} spacing={'5vw'} alignItems={'flex-start'}>
            <Skeleton isLoaded={!isLoading}>
                <Box borderWidth={'1px'} position={'relative'} borderTopRadius={7} borderColor='#EEEEEEE' maxW={'30vw'}>
                    <Image src={profileImage}  alt="Example" w={"400px"} h={"456px"} objectFit={'cover'} borderTopRadius={7}/>
                    <Button position="absolute" top='10px' right='10px' zIndex="1"  w={"85px"} h={"40px"} bgColor="#FFFFFF" borderWidth='1' borderColor='#EEEEEE'>
                        <div className='button' onClick={editProfile}>Editar</div>
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
            <Wrap spacing={10}  maxW={'70vw'}>
                {/* Realizar o .map para cada post do usuário dentro de um WrapItem alterando o src da Image */}
                <PostModal />
                <PostModal />
                <PostModal />
                <PostModal />
                <PostModal />
                <PostModal />
                <PostModal />
                <PostModal />
            </Wrap>
        </HStack>
    )
}

export default Perfil