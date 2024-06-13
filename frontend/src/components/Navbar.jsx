import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/arqnex_logo.png'
import { Image, Box, Flex, Button, IconButton, Text, Stack, HStack, useDisclosure, AvatarBadge, Avatar } from '@chakra-ui/react'
import { CloseIcon, EmailIcon, HamburgerIcon } from '@chakra-ui/icons'
import LoginModal from './LoginModal';
import NavLink from './NavLink';

const Links = [
	{ name: 'Inicio', route: '/'},
	{ name: 'Pessoas', route: '/peoples'},
	{ name: 'Escritórios', route: '/offices'},
	{ name: 'Cursos', route: '/courses'},
	{ name: 'Ao Vivo', route: '/live'},
]

const Navbar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.table(props)

    return (

                <>
                    {/* NAVBAR PARTE ESQUERDA */}
                    <Box bgColor='white' px={4} >
                        <Flex h={16} alignItems={"center"} justifyContent="space-between">
                            <Flex display={{'base': 'flex', 'md': 'none'}} alignItems={'center'}>
                                <IconButton bg={'parent'} size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} onClick={isOpen ? onClose : onOpen} />
                            </Flex>
                            <HStack spacing={8} alignItems='center'>
                                <Box alignItems={'center'} display={'flex'} mx={1}>
                                    <Image src={logo} mx={2}/>
                                </Box>
                                <Box display={!props.isUpload ? 'flex' : 'none'}>
                                    <HStack as={'nav'}  spacing={4} display={{base: 'none', md: 'flex'}}>
                                        {Links.map((link) => (
                                            <NavLink route={link.route} key={link.route}>
                                                <Text fontWeight={'medium'}>{link.name}</Text>
                                            </NavLink>
                                        ))}
                                    </HStack>
                                </Box>
                                
                            </HStack>
                            {/* CONDICAO LOGADO-NAO_LOGADO - PARTE DIREITA */}
                            {!props.isLogged ? (      /** SE NAO TIVER LOGADO - PARTE DIREITA MOSTRA PARA ENTRAR - CADASTRAR */
                                <Flex alignItems={'center'}>
                                <LoginModal isLogged={props.isLogged} setIsLogged={props.setIsLogged} />
                                <Button as={Link} to={`/cadastro`} variant={'outline'} w={'10rem'}>
                                    <Text>
                                        Cadastrar
                                    </Text>
                                </Button>
                                </Flex>
                            ) : ( /* CASO LOGADO, MOSTRA OS ICONES CORRESPONDENTE AO USUARIO, ETC... */
                                props.isUpload ? (       
                                    <HStack spacing={5}>
                                        <Text as={Link} to='/pro'bgGradient="linear-gradient(270deg, #FF6A00 0%, #EE2C09 100%)" bgClip='text' fontWeight='bold'>Faça um upgrade, torne-se PRO</Text>
                                        <Avatar as={Link} to={'/profile'} size={'md'}/>
                                    </HStack>
                                ) : (
                                    <HStack spacing={5}>
                                        <Text as={Link} to='/pro'bgGradient="linear-gradient(270deg, #FF6A00 0%, #EE2C09 100%)" bgClip='text' fontWeight='bold'>Faça um upgrade, torne-se PRO</Text>
                                        <Avatar as={Link} to={'/profile'} size={'md'}/>
                                        <Avatar bg={'white'} as={Link} to='/profile'>
                                            <IconButton icon={<EmailIcon/>} variant={'ghost'}/>
                                            <AvatarBadge boxSize='1em' bg='tomato' />
                                        </Avatar>
                                        <Button colorScheme='red' onClick={() =>{
                                            props.setIsLogged(false)
                                        }}>Logout</Button>
                                    </HStack>
                                )
                            )} 
                            
                        </Flex>

                        {/* NAVBAR TAMANHO SM(CELULAR) - PARTE ESQUERDA */}
                        <Box display={'flex'}>
				            {isOpen && (
                                <Box pb={4} display={{md: 'none'}}>
                                    <Stack as={'nav'} spacing={4}>
                                        {Links.map((link) => (
                                            <NavLink route={link.route} key={link.route}>
                                                <Text fontWeight={'medium'}>{link.name}</Text>
                                            </NavLink>
                                        ))}
                                    </Stack>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </>
    )
}


export default Navbar