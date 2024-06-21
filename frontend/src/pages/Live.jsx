import { React, useState } from 'react';
import '../style.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import { Link } from 'react-router-dom'
import Tag from '../components/Tag'; // Importe o componente Tag
import logo from '../images/arqnex_rodape.png'
import logo2 from '../images/marcadagua.png'
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import user1 from '../images/jurica-koletic-7YVZYZeITc8-unsplash.png'
import user2 from '../images/profile.png'
import user3 from '../images/joão 3.png'
import live_video from '../images/maxresdefault (2).png'

const Live = (props) => {

    const lives = [
        {
          id: 1,
          profileImage: user1, // Substitua pelo caminho real da imagem do perfil
          date: '15/08',
          title: 'Talk sobre o mercado de trabalho da Arquitetura',
          presenter: 'Apresentador 1' // Nome do apresentador
        },
        {
          id: 2,
          profileImage: user2, // Substitua pelo caminho real da imagem do perfil
          date: '27/08',
          title: 'Curso básico de REVIT',
          presenter: 'Apresentador 2' // Nome do apresentador
        },
        {
          id: 3,
          profileImage: user3, // Substitua pelo caminho real da imagem do perfil
          date: '31/08',
          title: 'Projeto executivo na prática',
          presenter: 'Apresentador 3' // Nome do apresentador
        }
      ];  

  return (
  <>  
    <div className="lives-container">
      <div className="left-section">
        <h1>Lorem ipsum dolor sit amet cons.</h1>
        <div className="video-container">
          <img src={live_video} alt="Live Video" className="video-thumbnail" />
          <button className="play-button">►</button>
        </div>
      </div>
      <div className="right-section">
        <div className="overlay">
          <h2>Agosto - 15 a 31</h2>
          <h3>Cronograma de lives</h3>
          <div className="lives-schedule">
            {lives.map((live) => (
              <div key={live.id} className="live-item">
                <img src={live.profileImage} alt={live.presenter} className="profile-image" />
                <div className="live-info">
                  <p className="live-detail">
                    <span className="live-date">{live.date}</span>: {live.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img src={logo2} alt="Logo" className="logo" />
        </div>
      </div>
    </div>

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
  );

}

export default Live;