import React from "react"


//components
import imagem_tela_inicial from '../images/banter-back.png'
import imagem_cf from '../images/video_cf.png'
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




const Home = () => {


    return(
        
        <>
            {/* DIV DA PARTE SUPERIOR DA TELA, RELACIONADO AS REDES SOCIAIS, ENTRAR AGORA E COMO FUNCIONA */}
            <div className="flex"> 
                
                <div className=""> {/* TEXTO VERTICAL TELA INICIAL */}

                    <div className="text-base align-text-bottom px-12 py-20 text-gray-300 tracking-wide [writing-mode:vertical-lr] rotate-180">
                        Twitter
                    </div>
                    <div className="text-base align-text-bottom px-12 py-10 text-gray-300 tracking-wide [writing-mode:vertical-lr] rotate-180">
                        Instagram
                    </div>
                    <div className="text-base align-text-bottom px-12 py-20 space-between text-gray-300 tracking-wide [writing-mode:vertical-lr] rotate-180">
                        Facebook
                    </div>

                </div>
                            
                <div className="container  w-full h-full relative grid">    {/* IMAGEM COM TEXTO NA TELA */}
                        <img alt="inicial" src={imagem_tela_inicial} className="absolute w-full h-100"></img>
                        <div className="absolute grid-cols-2">
                            {/* <div className=""> */}
                                <h1 className="text-7xl font-semibold my-10 py-20 px-20 text-white col-span-2">Lorem ipsum dolor sit amet,<br></br> conseteur sadipscing elitr.</h1>
                                <h4 className="text-xl font-normal font-light text-white px-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br></br>
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h4>
                                <button className="ml-20 my-10 px-14 py-2 font-semibold text-orange-600 rounded border-2 border-white bg-white">
                                    Entrar agora
                                </button>
                        </div>
                        <div className="relative flex flex-col items-end">
                        {/**Quebra linha */}
                            {/* <p className="place-content-center rounded-lg border-2 w-10 h-0 border-orange-950"></p> */}
                            <p className="text-right text-lg text-white px-10">Como</p>
                            <h1 className="text-right text-xl text-white px-10 tracking-wide">Funciona</h1>
                            <img alt="cf" src={imagem_cf} className="my-2 w-auto h-auto mr-10 rounded-lg border"></img>

                        </div>

                </div>



            </div>
            <div className="flex mx-16 my-10">
                <div className="columns-4 mx-12 my-20 py-10">
                        {/* LINHA 1 */}
                        <img alt="" src={imagem_c1_r1} className=""></img>  {/* 1,1 */}
                        <img alt="" src={imagem_c2_r1} className=""></img>  {/* 2,1 */}
                        <img alt="" src={imagem_c3_r1} className=""></img>  {/* 3,1 */}
                        <img alt="" src={imagem_c4_r1} className=""></img>  {/* 4,1 */}
                        {/* LINHA 2 */}
                        <img alt="" src={imagem_c1_r2} className=""></img>
                        <img alt="" src={imagem_c2_r2} className=""></img>
                        <img alt="" src={imagem_c3_r2} className=""></img>  {/* 1,4 */}
                        <img alt="" src={imagem_c4_r2} className=""></img>                        
                        {/* LINHA 3 */}
                        <img alt="" src={imagem_c1_r3} className=""></img>
                        <img alt="" src={imagem_c2_r3} className=""></img>
                        <img alt="" src={imagem_c3_r3} className=""></img>  {/* 1,4 */}
                        <img alt="" src={imagem_c4_r3} className=""></img>   
                        {/* LINHA 4 */}
                        <img alt="" src={imagem_c1_r4} className=""></img>
                        <img alt="" src={imagem_c2_r4} className=""></img>
                        <img alt="" src={imagem_c3_r4} className=""></img>  {/* 1,4 */}
                        <img alt="" src={imagem_c4_r4} className=""></img>   
                    </div>
            </div>

            <p className="border-2 w-full border-gray-100"></p>

            <div className="grid grid-cols-5 mt-10 ml-2 gap-4 justify-auto">  {/*RODAPE */}

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


export default Home