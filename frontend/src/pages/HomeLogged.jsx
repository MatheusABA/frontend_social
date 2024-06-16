import React, {useEffect} from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getToken } from "../api/auth"

//components
import logo from '../images/arqnex_rodape.png'
/* IMAGENS DENTRO DAS 4 COLUNAS - C = Column - R = Row */
import imagem_c1_r1 from '../images/Elizabeth_in_love_with_sky_01__00000.png'
import imagem_c1_r2 from '../images/image_1.png'
import imagem_c1_r3 from '../images/cephe-tasarimi-1024x576.png'
import imagem_c1_r4 from '../images/64fd29a73254f1533cab3b8099196083.png'

import imagem_c2_r1 from '../images/pdunhiansvwm5kzledqf.png'
import imagem_c2_r2 from '../images/images (5).png'
import imagem_c2_r3 from '../images/images (3).png'
import imagem_c2_r4 from '../images/front-revision2.png'

import imagem_c3_r1 from '../images/download.png'
import imagem_c3_r2 from '../images/01_UofT_Rendering_by_bloomimages_Courtesy_of_Diller_Scofidio___Renfro.png'
import imagem_c3_r3 from '../images/a6199e45e594d3e934acf4e7e7db9a0d.png'
import imagem_c3_r4 from '../images/Apollo_Arch_lens.png'

import imagem_c4_r1 from '../images/c_383_0c6373ea-df9f-468e-a71f-df9cc30712d6.png'
import imagem_c4_r2 from '../images/squamish-exterior-render.png'
import imagem_c4_r3 from '../images/6-2.png'
import imagem_c4_r4 from '../images/PhysCamera008_dawn.png'




const HomeLogged = (props) => {

  
  const location = useLocation();
  const navigate = useNavigate();

  var userId = location.state?.userId;
  console.log(userId);

  // Obtém o token do localStorage
  const token = getToken();
  console.log(token)
  useEffect(() => {
      if (!token) {
          // Se não houver token, redireicona para a página de login
          navigate('/');
      }
  }, [token, navigate]);

  props.setIsUpload(false);


  const handleClick = () => {
    navigate('/upload', { state: { token: token}})
  }

    return(
        <>
            {/* DIV DA PARTE SUPERIOR DA TELA, RELACIONADO AS REDES SOCIAIS, ENTRAR AGORA E COMO FUNCIONA */}
            <div className="grid lg:px-44 md:px-20 sm:px-14 lg:py-20 md:py-20 sm:py-20"> 
                <h1 className="text-6xl font-semibold">Olá usuário.</h1>
                <h4 className="text-3xl font-normal text-gray-300 break-words pt-3 lg:max-w-92 md:max-w-92 sm:max-w-full">Lorem ipsum dolor sit amet, conseteur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</h4>
                
                <div className="lg:flex md:grid sm:grid lg:space-x-10 mg:space-x-10 sm:space-y-5 lg:pt-5 md:pt-5 sm:pt-5">
                  
                    <button onClick={handleClick} className="bg-orange-500 text-white active:bg-orange-600 hover:bg-orange-300 font-bold  text-sm px-10 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 lg:ease-linear lg:transition-all lg:duration-150">
                    Postar trabalho
                    </button>
                  <Link to={'/pro'}>
                    <button className="text-orange-600 font-semibold italic text-sm lg:mr-0 md:mr-0 sm:mr-0">
                      Fazer um upgrade, torne-se PRO
                    </button>
                  </Link>
                  
                </div>


            </div>


            
            <div className="l lg:p-28 md:p-20 sm:p-12 sm:grid sm:grid-row-1 md:grid md:grid-row-1 overflow-auto">
              <div className="lg:flex lg:justify-between md:flex md:justify-between sm:grid sm:justify-between mb-4">
                <div className="flex space-x-4">
                  {/* Dropdown para escolher entre popular, mais vistos, etc. */}
                  <div className="flex items-center justify-center">
                    <select className="bg-white border border-gray-300 rounded-lg mx-2 px-2 py-2 md:w-30 md:h-10 ">
                      <option value="popular">Popular</option>
                      <option value="mais_vistos">Mais Vistos</option>
                      {/* Outras opções */}
                    </select>
                  </div>

                  {/* Opções entre clássico e contemporâneo + moderno */}
                  <div className="flex items-center justify-center space-x-4 lg:space-x-4">
                    <button className="bg-white border border-gray-300 rounded-lg px-4 h-10">Clássico</button>
                    <button className="bg-white border border-gray-300 rounded-lg px-4 h-10 sm:text-sm">Contemporâneo + Moderno</button>
                  </div>
                  
                </div>

                {/* Barra de pesquisa */}
                <div className="flex sm:mx-2 sm:my-2 items-center">
                  <input type="text" placeholder="Pesquisar..." className="bg-white border border-gray-300 rounded-lg px-4 py-2"></input>
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-4">Pesquisar</button>
                </div>
              </div>

                <table className="table-fixed lg:w-full md:w-auto sm:w-full">
                        {/* LINHA 1 */}
                        <tbody>
                          <tr>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c1_r1} className="w-full"></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c2_r1} className="w-full"></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c3_r1} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c4_r1} className=""></img></td>
                          </tr>
                        
                          <tr>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c1_r2} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c2_r2} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c3_r2} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c4_r2} className=""></img></td>
                          </tr>

                          <tr>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c1_r3} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c2_r3} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c3_r3} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c4_r3} className=""></img></td>
                          </tr>
                          
                          <tr>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c1_r4} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c2_r4} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c3_r4} className=""></img></td>
                            <td className="md:w-1/2 sm:w-1/2 lg:w-full"><img alt="" src={imagem_c4_r4} className=""></img></td>
                          </tr>
                        </tbody>


                </table>
            </div>

            <p className="border-2 w-full border-gray-100"></p>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:px-2 mt-10 ml-2 gap-4 justify-auto">  {/*RODAPE */}

                <div className="flex">
                    <h4 className="items-center">
                        <img src={logo} alt="arqnex" className="h-6"/>
                        <p className="text-xl my-1">Lorem ipsum dolor sit</p>
                    </h4>
                </div>

                <div className="">
                    <p className="items-center font-bold">Redes</p>
                    <p className="items-center my-2 font-thin">Facebook</p>
                    <p className="items-center my-2 font-thin">Instagram</p>
                    <p className="items-center my-2 font-thin">Twitter</p>
                </div>


                <div className="">
                    <p className="items-center font-bold">Contatos</p>
                    <p className="items-center my-2 font-thin">arqnex@gmail.com</p>
                    <p className="items-center my-2 font-thin">(00)0 0000-0000</p>
                </div>


                <div className="">
                    <p className="items-center font-bold">Contratando</p>
                    <p className="items-center my-2 font-thin">Postar um trabalho</p>
                    <p className="items-center my-2 font-thin">Procurar por pessoas</p>
                    <p className="items-center my-2 font-thin">Crie seu escritório</p>
                </div>

                <div className="">
                    <p className="rounded-lg bg-gray-200 w-92 h-32 mr-5"></p>
                    <br></br>
                </div>

            </div>

            <div className="m-2 font-light text-xs">
                <p className="text-right font-semibold mr-10 text-purple-700">Desenvolvido por JERA</p>
                <p>@ 2024 G2LMT, todos os direitos reservados.</p>

            </div>
            
        </>
        

    )

}


export default HomeLogged