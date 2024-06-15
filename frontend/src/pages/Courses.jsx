import { React, useState } from 'react';
import '../style.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import { Link } from 'react-router-dom'
import Tag from '../components/Tag'; // Importe o componente Tag
import logo from '../images/arqnex_rodape.png'
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import autocad from '../images/cad-1.png'
import vray from '../images/SITE_BANNER_VRAY.png'
import sketchup from '../images/SITE_BANNER_Sketchup.png'
import pos3d from '../images/SITE_BANNER_POS.png'

const Courses = (props) => {

  // Lista de cursos de exemplo
  const courses = [
    {
      id: 1,
      image: autocad, // Substitua pelo caminho real da imagem
      title: 'Autodesk Autocad',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyyam erat, sed diam'
    },
    {
      id: 2,
      image: vray, // Substitua pelo caminho real da imagem
      title: 'Fotorealismo V-Ray 3.4',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyyam erat, sed diam'
    },
    {
      id: 3,
      image: sketchup, // Substitua pelo caminho real da imagem
      title: 'Sketchup',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyyam erat, sed diam'
    },
    {
      id: 4,
      image: pos3d, // Substitua pelo caminho real da imagem
      title: 'Pós-Produção em 3D',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyyam erat, sed diam'
    }
  ];

  return (
  <>  
    <div className="courses-presentation">
      <div className='courses-overlay'>
        <h1>Lorem ipsum dolor sit amet cons.</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
      </div>
    </div>

    {/* Adicionando a lista de cursos */}
    <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <p className="video-aula">Vídeo Aula</p>
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
            </div>
          </div>
        ))}
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

export default Courses;