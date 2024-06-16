import React, { useState, createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo-white.png'
import bgLogoModal from '../images/banter-back.png'
import { Input, Stack, InputRightElement, Flex, Image, Box, Text, Button ,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, } from '@chakra-ui/react'
import { setToken } from '../api/auth'


const LoginModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        const user = {login, password};

        const resposta = await fetch("http://3.12.149.2:3050/user/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json',
            }
        })

        const json = await resposta.json();
        
        // console.log(json.token)  

        if (resposta.ok) {
            setLogin('');
            setPassword('');
            const token = json.token;
            setToken(token)     // armazenando token no localstorage
            console.log('Usuario logado com sucesso', json);
            props.setIsLogged(true);
            navigate("/", { state: { userId: json.userId } });
            onClose();
            
        } else {
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
                        <Input size={'lg'} borderRadius={'5px'} type={'password'} onChange={(e) => setPassword(e.target.value)}></Input>
                        <Text as={Link} color={'#DB752C'} ml={'13rem'} fontSize={'21px'} fontWeight={'bold'} my={5} mr={0} pl={6} to={'/cadastro'} onClick={onClose} >Esqueceu a senha?</Text>
                        <Button onClick={() => {
                            handleSubmit();
                            onClose();
                        }} bgColor='#DB752C' color={'white'} width={'100%'} display={'flex'} alignItems={'center'} borderRadius={'3px'} _hover={{'bgColor':'orange.600'}}>
                            <Text fontSize={'1.2rem'}>Entrar</Text>
                        </Button>
                        {error && <div className='error'><span className='rounded-lg border-2 border-red-400 bg-red-200 p-2'>{error}</span></div>}
                        {successMessage && <div className='success'><span className='rounded-lg border-2 border-green-400 bg-green-200 p-2'>{successMessage}</span></div>}
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
