import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/arqnex_logo.png'
import { Image, Box, Flex, Button, IconButton, Text, Wrap, WrapItem, Stack, HStack, useDisclosure, AvatarBadge, Avatar } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import LoginModal from './LoginModal';
import NavLink from './NavLink';

const Links = [
	{ name: 'Inicio', route: '/'},
	{ name: 'Pessoas', route: '/peoples'},
	{ name: 'Escritórios', route: '/offices'},
	{ name: 'Cursos', route: '/courses'},
	{ name: 'Ao Vivo', route: '/live'},
]

const Navbar = ({isLogged}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

                <>
                    {/* NAVBAR PARTE ESQUERDA */}
                    <Box bgColor='white' px={4} >
                        <Flex h={16} alignItems={"center"} justifyContent="space-between">
                            <Flex display={{'base': 'flex', 'md': 'none'}} alignItems={'center'}>
                                <IconButton bg={'parent'} size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} onClick={isOpen ? onClose : onOpen}/>
                            </Flex>
                            <HStack spacing={8} alignItems='center'>
                                <Box alignItems={'center'} display={'flex'} mx={1}>
                                    <Image src={logo} mx={2}/>
                                </Box>
                                <HStack as={'nav'}  spacing={4} display={{base: 'none', md: 'flex'}}>
                                    {Links.map((link) => (
                                        <NavLink route={link.route} key={link.route}>
                                            <Text fontWeight={'medium'}>{link.name}</Text>
                                        </NavLink>
                                    ))}
                                </HStack>
                            </HStack>
                            {/* CONDICAO LOGADO-NAO_LOGADO - PARTE DIREITA */}
                            {!isLogged ? (      /** SE NAO TIVER LOGADO - PARTE DIREITA MOSTRA PARA ENTRAR - CADASTRAR */
                                <Flex alignItems={'center'}>
                                <LoginModal />
                                <Button as={Link} to={`/cadastro`} variant={'outline'} w={'10rem'}>
                                    <Text>
                                        Cadastrar
                                    </Text>
                                </Button>
                                </Flex>
                            ) : (       /* CASO LOGADO, MOSTRA OS ICONES CORRESPONDENTE AO USUARIO, ETC... */
                                <Flex alignItems={'center'}>
                                    <Text color={'#FF6A00'}></Text>

                                </Flex>
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