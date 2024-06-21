import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WrapItem, useToast, HStack, VStack, Avatar, Flex, Image, Box, Text, Button ,Modal, ModalOverlay, ModalContent, ModalHeader, Divider, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { getToken, removeToken } from '../api/auth';
import axios from 'axios';
import profile from '../images/profile.png'
import VRay from '../images/V-Ray.png'
import AutoCad from '../images/AutoCad.png'
import Adobe from '../images/Adobe.png'

const PostModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dateStr = props.post.createdAt;
    const date = new Date(dateStr);

    const options = { year: 'numeric', month: 'long' };
    const formatDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    console.log(props.post)
    console.log(props.user)
    const softwares = JSON.parse(props.post.softwares)

    const softwareIcons = {
        Adobe: Adobe,
        VRay: VRay,
        AutoCad: AutoCad,
        // Adicione aqui outros softwares com suas respectivas imagens
    };

    return (
        <>
            <WrapItem >
                <Box  >
                    <Image src={`http://18.117.170.99:3050/files/${props.post.pathImage}`} objectFit={'cover'} borderWidth='1px' borderColor={'#AEAEAE'} borderTopRadius={7} w={400} h={250} onClick={onOpen} _hover={{cursor: 'pointer'}} />    
                </Box>
            </WrapItem>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={'3xl'} >
            <ModalOverlay backdropFilter='auto' backdropBlur='5px'/>
            <ModalContent>
                <ModalHeader>
                    <Flex>
                        <Avatar name={props.user.nameUser} src={profile} />
                        <VStack spacing={4}>
                            <Text fontWeight={'bold'} fontSize={'24px'} color={'black'}>Lorem Ipsum dolor sit amet</Text>
                            <HStack>
                                <Text color={'#1D252C3D'} fontSize={'20px'}>Por</Text>
                                <Text fontSize={'20px'} color={'#db752c'}>{'userName'}</Text>
                            </HStack>
                        </VStack>
                    </Flex>
                </ModalHeader>
                <ModalCloseButton color={'black'} />
                    <ModalBody>
                        <Box
                            display={"flex"}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            borderTopRadius="5px"
                            p="4"
                        >
                            <Image src={`http://18.117.170.99:3050/files/${props.post.pathImage}`} mb="4" w='45vw' h='25rem'/>
                            <Text textAlign="center" mb="4" >
                                {props.post.descriptionPost}
                            </Text>
                        </Box>
                        <Flex align={'flex-start'} py='5'>
                            {softwares.map((software) => {
                                return (
                                <Button mx='5px' bg='#f7f7f7' borderRadius={'full'} _hover={{cursor: 'default'}} _active={{bg: '#f0f0f0',transform: 'scale(0.98)',borderColor: '#bec3c9',}}>
                                    <Image src={softwareIcons[software]} boxSize='30px' alt={software} mr='8px'  />
                                    {software}
                                </Button>)
                            })}
                                
                        </Flex>
                        <Divider/>

                    </ModalBody>
                </ModalContent>
            </Modal>
    </>
    )
}

export default PostModal