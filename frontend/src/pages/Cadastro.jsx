/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'


// images
import imagem_casa from '../images/House-Modern-House-3D-Architectural-Rendering.jpg'

// componentes
// import ContaCB from '../components/ComboboxConta';  


const Cadastro = () => {
    const [nameUser, setNome] = useState('')
    const [profileName, setNomePerfil] = useState('')
    const [accountType, setConta] = useState('')
    const [userCpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [password, setSenha] = useState('')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const usuario = {nameUser, profileName, accountType, userCpf, email, password}

        const resposta = await fetch("/user/create", {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type' : 'application/json',
            }
        })

        const json = await resposta.json();

        if(!resposta.ok) {
            console.log('Não foi possivel adicioanr o usuário', json)
            setError('Nao foi possível cadastrar o usuário!');

            // Após 5 segundos, limpa a mensagem de erro
            setTimeout(() => {
                setError('');
            }, 5000);
        }

        if (resposta.ok) {
            setNome('');
            setNomePerfil('');
            setConta('');
            setCPF('');
            setEmail('');
            setSenha('');
            console.log('Novo usuario adicionado', json);
            setSuccessMessage('Novo usuário adicionado com sucesso!');

            // Após 5 segundos, limpa a mensagem de erro
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        }


    }


    return (
        <div className="flex justify-between">
            
            <div className="grid rounded m-3 bg-white">

                <div className="grid-cols-1 pt-20 pl-40">

                    <h1 className="text-4xl font-normal text-gray-300 pb-2">Junte-se a ARQNEX</h1>
                    <h4 className="text-5xl font-medium">Cadastro</h4>

                    <div className="columns-2 mt-3 text-light pt-10">
                        <div className="rounded text-white bg-blue-800 text-center w-100 py-2">
                            <a href="/cadastro" className="font-bold text-sl tracking-wide">Cadastrar com Facebook</a>
                        </div>
                        
                        <div className="rounded text-white bg-blue-400 text-center w-100 py-2">
                            <a href="/cadastro" className="font-bold text-sl tracking-wide">Cadastrar com Google</a>

                        </div>

                    </div>

                    <p className="text-center text-bold text-lg text-gray-300 pt-5 tracking-wide">Ou cadastre com email</p>


                    <p className="mt-4 rounded-lg border border-gray-100"></p>

                    {error && <div className='error text-center'><span className='rounded-lg border-2 border-red-400 bg-red-200 p-2'>{error}</span></div>}
                    {successMessage && <div className='success text-center'><span className='rounded-lg border-2 border-green-400 bg-green-200 p-2'>{successMessage}</span></div>}

                    <form className="create font-bold" method='POST' onSubmit={handleSubmit}>

                        <div className=' mt-4'>
                            <label className="text-xl text-light">Nome</label>
                        </div>
                        <input
                        className="rounded border-2 w-full p-1"
                        id="nome"
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                        value={nameUser}
                        />


                        <div className=' mt-4'>
                            <label className="text-xl text-light">Nome de Perfil</label>
                        </div>
                        <input
                        className="rounded border-2 w-full p-1"
                        id="nome_perfil"
                        type="text"
                        onChange={(e) => setNomePerfil(e.target.value)}
                        value={profileName}
                        />
                        
                          <sub className='flex font-light italic pt-2'><p className="text-light text-gray-400">Seu perfil será encontrado pela URL: http://arqnex.com/</p>nome de perfil</sub>  
                        

                        <div className='mt-4'>
                            <label className='text-xl text-light'>Tipo de conta</label>
                        </div>
                        
                        {/* <div className='w-full'>
                            <ContaCB/>
                        </div> */}

                        <input
                        className="rounded border-2 w-full p-1"
                        id="conta"
                        type="text"
                        onChange={(e) => setConta(e.target.value)}
                        value={accountType}
                        />
                        
                        <sub className='grid font-normal italic pt-2'>Tipos de contas aceitas: <p className="text-light text-gray-400 pt-5">Formando,Graduado, Escritório de Arquitetura, Escritório de Design, Escritório de Engenharia, Escritório do Ramo </p></sub>  

                        {/* CPF */}
                        <div className=' mt-4'>
                            <label className="text-xl text-light">CPF</label>
                        </div>
                        <input
                        className="rounded border-2 w-full p-1"
                        id="cpf"
                        type="text"
                        onChange={(e) => setCPF(e.target.value)}
                        value={userCpf}
                        />
                        
                        {/* Email */}
                        <div className=' mt-4'>
                            <label className="text-xl text-light">Email</label>
                        </div>
                        <input
                        className="rounded border-2 w-full p-1"
                        id="email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />


                        {/* Senha */}
                        <div className=' mt-4'>
                            <label className="text-xl text-light">Senha</label>
                        </div>
                        <input
                        className="rounded border-2 w-full p-1"
                        id="senha"
                        type="password"
                        onChange={(e) => setSenha(e.target.value)}
                        value={password}
                        />
                        <div>
                            <sub className='font-light italic'>Mínimo de 6 caracteres</sub>
                        </div>
                        <div>
                            <input type='checkbox' className='align-middle size-5'/>
                            <sub className='font-normal text-base align-baseline'> Ao criar minha conta eu aceito os<sub className="font-normal text-base text-orange-600 align-top"> Termos de Uso</sub> e <sub className='font-normal text-base text-orange-600 align-text-bottom'>Política de Privacidade.</sub>
                            </sub>
                        </div>
                        <br></br>
                        <button className='hover:bg-orange-800 mt-5 p-3 rounded-lg border-2 border-orange-600 bg-orange-600 text-white font-black' type="submit" >Criar minha conta</button>

                    </form>

                </div>

                

            </div>


            <div className="justify-between">
                <img className="size-full md:size-auto" alt="House" src={imagem_casa}/>
            </div>

        </div>
    )

}


export default Cadastro;