import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { WrapItem, Input, Stack, InputRightElement, Flex, Image, Box, Text, Button ,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, } from '@chakra-ui/react'

const PostModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // Realizar um await fetch na tabela de postagens e alterar os recebimentos
    // const { image, description, softwares, data } = await fetch(posts) algo do tipo
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState('');

    // usado para navegar entre paginas e mandar `estados` - 
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    return (
        <>
            <WrapItem >
                <Box borderWidth='1px' borderColor={'#AEAEAE'} borderTopRadius={7} w={250} h={250} onClick={onOpen}>
                    <Image src='../images/image_1.png' objectFit={'cover'} borderTopRadius={7} />    
                </Box>
            </WrapItem>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={'md'} >
            <ModalOverlay backdropFilter='auto'  backdropBlur='5px'/>
            <ModalContent >
                <ModalCloseButton color={'white'} />
                <Box backgroundSize="cover" backgroundPosition="center" w={'100%'} h={250} display={"flex"} alignItems="center" justifyContent="center" borderTopRadius="5px">
                    <Image src={'../images/image_1.png'} />
                </Box>
                <ModalBody p={4}>
                    <Flex justifyContent={'space-evenly'} my={'15px'}>
                        <Button colorScheme='facebook' w={'15rem'} mx={1}>Facebook</Button>
                        <Button colorScheme='twitter' w={'15rem'} mx={1}>Google</Button>
                    </Flex>
                </ModalBody>
                <ModalFooter justifyContent={'center'} my={3}>
                    <Text color={'#1D252C3D'} mr={'0.25rem'}>Novo por aqui?</Text>
                    <Text as={Link} to={'/cadastro'} onClick={onClose} fontWeight={'bold'}>Criar conta</Text>
                </ModalFooter>
            </ModalContent>
            </Modal>
    </>
    )
}

export default PostModal