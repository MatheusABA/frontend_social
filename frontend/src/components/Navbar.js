import { Link } from 'react-router-dom'
import logo from '../images/arqnex_logo.png'

const Navbar = () => {
    
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



                    <div className="flex items-center space-x-8">

                        <div className="flex justify-around space-x-8 items-center">
                            <div>
                                <Link to="/entrar">
                                    <h4 className="text-orange-600">Entrar</h4>
                                </Link>
                            </div>
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