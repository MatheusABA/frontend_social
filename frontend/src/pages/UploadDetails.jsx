import { React, useState } from 'react';
import '../style.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import { Link } from 'react-router-dom'
import Tag from '../components/Tag'; // Importe o componente Tag
import { Box, Button, Input, Textarea, HStack, Image, Stack, Text, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import logo from '../images/arqnex_rodape.png'
import { useLocation } from 'react-router-dom';
import {getToken} from '../api/auth'
import axios from 'axios';

const UploadDetails = () => {

  const toast = useToast();

  const location = useLocation();
  const { image } = location.state;
  

  // DADOS ENVIADOS
  const [formData, setFormData] = useState({
    userId: '',
    titlePost:'',
    softwares: '',
    styles: '',
    projects: '',
    types: '',
    descriptionPost: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    try {
      const formDataAll = new FormData();
      formDataAll.append('image', image);
      Object.keys(formData).forEach(key => formDataAll.append(key, formData[key]));
      formDataAll.forEach((e) => console.log(e))
      const response = await axios.post('http://18.117.170.99:3050/user/post', formDataAll, {
        headers: {  
          'Content-Type': 'multipart/form-data',
          'Authorization': `${token}`,
        },
      });

      if (response.ok) {
        toast({
        title: "Postagem feita com sucesso.",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    
    } else {
      toast({
        title: "Erro ao fazer a postagem",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

      

    } catch (error) {
      toast({
        title: "Erro ao fazer a postagem",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = getToken();
  //   try {
  //     const formDataAll = new FormData();
  //     formDataAll.append('image', image);
  //     formDataAll.append('titlePost', formData.titlePost);
  //     formDataAll.append('softwares', formData.softwares);
  //     formDataAll.append('styles', formData.styles);
  //     formDataAll.append('projects', formData.projects);
  //     formDataAll.append('types', formData.types);
  //     formDataAll.append('descriptionPost', formData.descriptionPost);
  //     formDataAll.append('userId', formData.userId);
  //     console.log(formDataAll)
  //     const response = await axios.post('http://3.12.149.2:3050/user/post', {
  //       // method: 'POST',
  //       body: formDataAll.values,
  //       headers: {
  //         'Authorization': `${token}`,
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Erro ao enviar os dados');
  //     }
  
  //     toast({
  //       title: "Postagem feita com sucesso.",
  //       description: "",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Erro ao fazer a postagem",
  //       description: "",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   }
  // };


  // enviando primeiro imagem, logo apos o json
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = getToken();
  //   try {
  //     // Envia a imagem primeiro
  //     const formDataImage = new FormData();
  //     formDataImage.append('image', image);

  //     const responseImage = await fetch('http://3.12.149.2:3050/user/post', {
  //       method: 'POST',
  //       files: formDataImage,
  //       body: JSON.stringify(...formData),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `${token}`,
  //       },
  //     });

  //     if (!responseImage.ok) {
  //       throw new Error('Erro durante o envio da imagem!')
  //     }

  //     if (responseImage.ok) {
  //       console.log('Imagem recebida')
  //     }

      // caminho da imagem
      // const imageData = await responseImage.json();
      // const imageUrl = imageData.url;

      // Após enviar a imagem, envia o JSON com as informações
    //   const responseJson = await fetch('http://3.12.149.2:3050/user/post', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`,
    //     },

    //     body: JSON.stringify({
    //       ...formData,
    //       image: imageUrl,
    //     }),
    //   },

    //   console.log('token:', token),
    //   console.log('titlePost:', formData.titlePost),
    //   console.log('softwares:', formData.softwares),
    //   console.log('styles:', formData.styles),
    //   console.log('projects:', formData.projects),
    //   console.log('types:', formData.types),
    //   console.log('descriptionPost:', formData.descriptionPost),
    //   console.log('imagePost:', image),
    //  );

    //   if (!responseJson.ok) {
    //     throw new Error('Erro ao enviar o JSON com as informações');
    //   }


    
  //     toast({
  //       title: "Postagem feita com sucesso.",
  //       description: "",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
      
      
  //   } catch (error) {
  //     toast({
  //       title: "Erro ao fazer a postagem",
  //       description: "",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //   })
  //   }
  // };


  return (
  <>  
    <div className="details-container">
      <h2 className="details-title">Adicionar detalhes</h2>
      <p className="details-description">Fale mais sobre seu trabalho.</p>
      
      

      <div className="flex-container">
        <div className="image-preview-container">
            <img name='image' src={image} alt="Imagem Carregada" className="uploaded-image" />
            <div className="attachments-title">
              <span className="attachments-style">Anexos</span> <span className="pro-style">PRO</span>
            </div>
            <Box className="additional-images-container" as={Link} to='/pro'>
              {/** FALTA ADICIOANR LOGICA PARA OS PROS */}
            <div className="additional-image">
                <span class="material-icons icon-photo">image</span>
            </div>
            <div className="additional-image">
                <span class="material-icons icon-photo">image</span>
            </div>
            <div className="additional-image">
                <span class="material-icons icon-photo">image</span>
            </div>
            <div className="additional-image">
                <span class="material-icons icon-photo">image</span>
            </div>
            <div className="additional-image">
                <span class="material-icons icon-photo">image</span>
            </div>
            
            </Box>
        </div>

        <form className="create form-container" method='POST' onSubmit={handleSubmit}>
            {/* Formulário */}
            <div className="form-fields">
            <h3 className='forms-titles'>Título</h3>
            <input
            type="text"
            className="input-field"
            name="titlePost"
            value={formData.titlePost}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Softwares</h3>
            <select
            className="input-field"
            name='softwares'
            value={formData.softwares}
            onChange={handleInputChange}
            >
                <option value="0"></option>
                <option value="VRay">VRay</option>
                <option value="Photoshop">Photoshop</option>
                <option value="Adobe">Adobe</option>
            </select>

            <h3 className='forms-titles'>Estilos</h3>
            <select
            className="input-field"
            name='styles'
            value={formData.styles}
            onChange={handleInputChange}
            >
                <option value="0"></option>
                <option value="Contemporâneo">Contemporâneo</option>
                <option value="Moderno">Moderno</option>
                <option value="Popular">Popular</option>

            </select>



            <h3 className='forms-titles'>Projeto</h3>
            <select
            className="input-field"
            name='projects'
            value={formData.projects}
            onChange={handleInputChange}
            >
                <option value="0"></option>
                <option value="Portfolio">Portfolio</option>
                <option value="Album">Album</option>
                <option value="Andamento">Projeto em andamento...</option>
            </select>

            <h3 className='forms-titles'>Tipo</h3>
            <select
            className="input-field"
            name='types'
            value={formData.types}
            onChange={handleInputChange}
            >
                <option value="0"></option>
                <option value="Arquitetônico">Arquitetônico</option>
                <option value="Engenharia">Engenharia</option>
                <option value="Design">Design</option>
                
            </select>

            <h3 className='forms-titles'>Descrição</h3>
            <textarea 
            className="input-field description-textarea"
            rows="4"
            name='descriptionPost'
            value={formData.descriptionPost}
            onChange={handleInputChange}
            ></textarea>
            </div>

            <div className="actions">
              <button className="publish-button" font-weight="bold" type='submit'>Publicar</button>
                <Link to={'/upload'}>
                  <button className="cancel-button">Cancelar</button>
                </Link>
            </div>
            
        </form>
        

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

export default UploadDetails;

