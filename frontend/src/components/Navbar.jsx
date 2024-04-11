import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/arqnex_logo.png'
import bgLogoModal from '../images/banter-back.png'


const Navbar = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (

        
        <nav className="flex font-sans rounded-lg border border-gray-200">

                
                <div className="max-w-8xl border p-4 flex justify-between w-full">

                    <div className="flex justify-around space-x-8 items-center">

                        <div>
                            <p className="flex items-center">
                                <img src={logo} alt="arqnex"/>
                            </p>
                        </div>

                        <div className="font-light hover:font-bold">
                            <Link to="/">
                                <h4 className="allign-bottom">Início</h4>
                            </Link>
                        </div>

                        <div className="font-light hover:font-bold">
                            <Link to="/pessoas">
                                <h4 className="allign-bottom">Pessoas</h4>
                            </Link>
                        </div>

                        <div className="font-light hover:font-bold">
                            <Link to="/escritorios">
                                <h4>Escritórios</h4>
                            </Link>
                        </div>

                        <div className="font-light hover:font-bold">
                            <Link to="/cursos">
                                <h4>Cursos</h4>
                            </Link>
                        </div>

                        <div className="font-light hover:font-bold">
                            <Link to="/live">
                                <h4>Ao vivo</h4>
                            </Link>
                        </div>                        
                    </div>



                    <div className="flex justify-around items-center space-x-8">

                        <div className="flex justify-around space-x-8 items-center">
                            {/* <div>
                                <Link to="/login">
                                    <h4 className="text-orange-600">Entrar</h4>
                                </Link>
                            </div> */}
                            <button className=' text-orange-600'
                            type='button'
                            onClick={() => setShowModal(true)}
                            > Entrar
                            </button>
                            {showModal ? (
                            <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                                <div className="relative w-96 my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex justify-center border-solid border-blueGray-200 rounded-t">
                                    
                                        <img className='bg-fixed bg-clip-border bg-origin-border bg-top' alt='bg' src={bgLogoModal}></img>
                                        <img className='absolute align-center' alt="logo" src={logo}></img>



                                    {/** Close Button */}
                                    <button className="ml-80 mt-2 absolute rounded-lg border-2 bg-gray-300 border-gray-600 text-3xl leading-none outline-none hover:outline-none"
                                    onClick={() => setShowModal(false)} >
                                        <span className="place-items-end font-bold h-7 w-7 text-lg text-gray-600 block outline-none hover:text-black">
                                        X
                                        </span>
                                    </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-3 flex-auto">    {/* Modal Body, implement facebook/google buttons and labels here */}
                                        <div className="columns-2 p-2text-light">
                                            <div className="rounded text-white bg-blue-800 text-center w-100 py-2">
                                                <a href="/cadastro" className="font-bold text-sl tracking-wide">Cadastrar com Facebook</a>
                                            </div>
                                            
                                            <div className="rounded text-white bg-blue-400 text-center w-100 py-2">
                                                <a href="/cadastro" className="font-bold text-sl tracking-wide">Cadastrar com Google</a>

                                            </div>

                                        </div>
                                        {/* Login and Password labels, created to implement before the logic */}
                                        <p className='font-bold text-lg' >Nome </p>
                                        <input className='rounded border-2 bg-gray-100 border-gray-200 mt-2 h-8 w-80' type="text" name="name"/><br></br>

                                        <p className='mt-5 font-bold text-lg'>Senha</p>
                                        <input className='rounded border-2 bg-gray-100 border-gray-200 mt-2 h-8 w-80 mr-5' type='password' name="password"></input>
                                        
                                        <a href="/cadastro" className='justify-end content-end font-bold text-orange-600'>Esqueceu a senha?</a>
                                    </div>

                                    {/*footer*/}
                                    <div className="grid items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-32 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Entrar
                                    </button>
                                    <button
                                        className="text-gray-300 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                    Novo por aqui? <a href='/cadastro' className='text-black'> Criar conta </a>
                                    </button>

                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}


                        </div>
                        
                        <div>
                            <Link to="/cadastro">
                                <h4 className="nav-link mr-5 items-center rounded-lg border-2 bordar-gray-200 px-8 py-2">Cadastrar</h4>
                            </Link>
                        </div>

                    </div>

                </div>
        </nav>
    )
}


export default Navbar