import React, { useState, useEffect } from 'react'
import { Link as Reactlink } from 'react-router-dom'
import { Stack, HStack, Flex, Image, Box, Text, Button, Badge, Wrap, WrapItem, Skeleton, IconButton } from '@chakra-ui/react'

const Perfil = (props) => {
    props.setIsUpload(false)

    const [isLoading, setiIsloading] = useState(false)

    // useEffect(() => {
    //     // Pegar postagens e salvar em variável
    //     return () => {
    //         second
    //     }
    // }, [])
    
    return (
        <Flex px={140} py={150}>
            <Skeleton isLoaded={!isLoading}>
                <Box borderWidth={'1px'} position={'relative'} borderTopRadius={7} borderColor='#EEEEEEE'>
                    <Image src="https://via.placeholder.com/400x200" alt="Example" w={"400px"} h={"456px"} objectFit={'cover'} borderTopRadius={7} />
                    <Button position="absolute" top='10px' right='10px' zIndex="1"  w={"85px"} h={"40px"} bgColor="#FFFFFF" borderWidth='1' borderColor='#EEEEEE'>
                        Editar
                    </Button>
                    <Stack maxW='400px' px='2vh' spacing='5'>
                        <Flex direction='column' justify='space-between' alignItems='center' mt='2'>
                            <Text fontSize="24px" fontWeight="bold" mt="38px">
                                Nome Usuário
                            </Text>
                            <Text fontSize="24px" fontWeight="medium" color="#1D252C61">
                                Campo Grande, MS
                            </Text>
                            <Text fontSize="20px" fontWeight="regular" color="#1D252C" textAlign='center' pt='10'>
                                Lorem ipsum dolor sit aconsetetur sadipscing elitr, sedumy eirmod tempor invidunt ut labore et dolore magna aliquyam amet alere
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
        </Flex>
    )
}

export default Perfil