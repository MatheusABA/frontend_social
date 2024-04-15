import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../images/logo-white.png'
import bgLogoModal from '../images/banter-back.png'
import { Input, Stack, InputRightElement, Flex, Image, Box, Text, Button ,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, } from '@chakra-ui/react'



const LoginModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // usado para navegar entre paginas e mandar `estados` - 
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        const user = {login, password};
        var userId = null;
        const resposta = await fetch("/user/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json',
            }
        })

        const json = await resposta.json();

        if (resposta.ok) {
            setLogin('');
            setPassword('');
            userId = json.userId;
            console.log('Usuario logado com sucesso',json);
            props.setIsLogged(true);        // permitindo o usuario ir a homeLogado caso informações sejam validadas
            navigate("/", { state: { userId: userId } })     // navegar ate a home logada e tentando mandar o userId -> necesario para fazer post
            onClose();
            
        } else {        // nao validado o login retorna para home e com erro ao fazer login no console
            setLogin('');
            setPassword('');
            console.log('Erro ao fazer login')
            navigate('/')
        }
    }



    return (
        <>
            <Button onClick={onOpen} variant={'ghost'} colorScheme='orange' w={'10rem'} mx={5}>Entrar</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered size={'md'} >
            <ModalOverlay backdropFilter='auto'  backdropBlur='5px'/>
            <ModalContent >
                <ModalCloseButton color={'white'} />
                <Box bgImage={bgLogoModal} backgroundSize="cover" backgroundPosition="center" w={'100%'} h={250} display={"flex"} alignItems="center" justifyContent="center" borderTopRadius="5px">
                    <Image src={logo} />
                </Box>
                <ModalBody p={4}>
                    <Flex justifyContent={'space-evenly'} my={'15px'}>
                        <Button colorScheme='facebook' w={'15rem'} mx={1}>Facebook</Button>
                        <Button colorScheme='twitter' w={'15rem'} mx={1}>Google</Button>
                    </Flex>
                    <Stack spacing={1} mt={'2rem'}>
                        <Text fontWeight={'bold'} fontSize={'24px'} my={2}>Nome</Text>
                        <Input size={'lg'} borderRadius={'5px'} onChange={(e) => setLogin(e.target.value)}></Input>
                        <Text fontWeight={'bold'} fontSize={'24px'} my={2}>Senha</Text>
                        <Input size={'lg'} borderRadius={'5px'} onChange={(e) => setPassword(e.target.value)}></Input>
                        <Text as={Link} color={'#DB752C'} ml={'13rem'} fontSize={'21px'} fontWeight={'bold'} my={5} mr={0} pl={6} to={'/cadastro'} onClick={onClose} >Esqueceu a senha?</Text>
                        <Button onClick={() => {
                            handleSubmit();
                            onClose();
                        }} bgColor='#DB752C' color={'white'} width={'100%'} display={'flex'} alignItems={'center'} borderRadius={'3px'} _hover={{'bgColor':'orange.600'}}>
                            <Text fontSize={'1.2rem'}>Entrar</Text>
                        </Button>
                    </Stack>
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

export default LoginModal