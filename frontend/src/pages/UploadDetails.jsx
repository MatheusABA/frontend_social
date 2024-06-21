import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style.css';
import { Link } from 'react-router-dom';
import { getToken } from '../api/auth';
import axios from 'axios';
import { Box, Button, ButtonGroup, IconButton, Select, HStack, useToast } from '@chakra-ui/react';
import { CloseIcon } from "@chakra-ui/icons";
import logo from '../images/arqnex_rodape.png';
import VRay from '../images/V-Ray.png'
import AutoCad from '../images/AutoCad.png'
import Adobe from '../images/Adobe.png'

const UploadDetails = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { file, token } = location.state;

  const [formData, setFormData] = useState({
    titlePost: '',
    softwares: '',
    styles: '',
    projects: '',
    types: '',
    descriptionPost: '',
  });

  const softwareIcons = {
    Adobe: Adobe,
    VRay: VRay,
    AutoCad: AutoCad,
    // Adicione aqui outros softwares com suas respectivas imagens
  };

  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);

  const handleSelectSoftware = (e) => {
    const software = e.target.value;
    if (software && !selectedSoftwares.includes(software)) {
      const updatedSelectedSoftwares = [...selectedSoftwares, software];
      setSelectedSoftwares(updatedSelectedSoftwares);
      setFormData((prevFormData) => ({
        ...prevFormData,
        softwares: JSON.stringify(updatedSelectedSoftwares),
      }));
      console.log(JSON.stringify(updatedSelectedSoftwares));
    }
    setSelectedSoftware(""); // Reset select
  };

  const handleRemoveSoftware = (softwareToRemove) => {
    setSelectedSoftwares(selectedSoftwares.filter((software) => software !== softwareToRemove));
  };

const renderSelectedSoftwaresGroups = () => {
  return selectedSoftwares.map((software) => (
    <ButtonGroup key={software} isAttached variant="outline" mb={2}>
      <Button
        leftIcon={<img src={softwareIcons[software]} alt={software} width="20" />}
        _hover={{ cursor: 'default' }}
        _active={{ bg: '#ffffff', transform: 'scale(0.98)', borderColor: '#bec3c9' }}
      >
        {software}
      </Button>
      <IconButton
        aria-label={`Remover ${software}`}
        icon={<CloseIcon />}
        onClick={() => handleRemoveSoftware(software)}
      />
    </ButtonGroup>
  ));
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Preencha todos os campos",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!token) {
      toast({
        title: "Erro ao obter token",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const formDataAll = new FormData();
      formDataAll.append('image', file);
      Object.keys(formData).forEach(key => formDataAll.append(key, formData[key]));

      const response = await axios.post('http://18.117.170.99:3050/user/post', formDataAll, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `${token}`,
        },
      });

      if (response.status === 201) {
        toast({
          title: "Postagem feita com sucesso.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/'); // Redirecionar para uma página de sucesso ou outro destino
      } else {
        toast({
          title: "Erro ao fazer a postagem",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao fazer a postagem",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="details-container">
        <h2 className="details-title">Adicionar detalhes</h2>
        <p className="details-description">Fale mais sobre seu trabalho.</p>

        <div className="flex-container">
          <div className="image-preview-container">
            <img src={file ? URL.createObjectURL(file) : ''} alt="Imagem Carregada" className="uploaded-image" />
            <div className="attachments-title">
              <span className="attachments-style">Anexos</span> <span className="pro-style">PRO</span>
            </div>
            <Box className="additional-images-container" as={Link} to='/pro'>
              <div className="additional-image">
                <span className="material-icons icon-photo">image</span>
              </div>
              <div className="additional-image">
                <span className="material-icons icon-photo">image</span>
              </div>
              <div className="additional-image">
                <span className="material-icons icon-photo">image</span>
              </div>
              <div className="additional-image">
                <span className="material-icons icon-photo">image</span>
              </div>
              <div className="additional-image">
                <span className="material-icons icon-photo">image</span>
              </div>
            </Box>
          </div>

          <form className="create form-container" method='POST' onSubmit={handleSubmit}>
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
              <Select name='softwares' value={selectedSoftware} onChange={handleSelectSoftware}>
                <option value="">Selecione um software</option>
                <option value="VRay">V-Ray</option>
                <option value="AutoCad">AutoCad</option>
                <option value="Adobe">Adobe</option>
              </Select>
              {/* Exibição dos grupos de botões de software selecionados */}
              <HStack spacing={4} align="flex-start" my='3' minH='5vh' borderBottom="1px solid #EEEEEE">
                {renderSelectedSoftwaresGroups('Softwares')}
              </HStack>

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
              <button className="publish-button" type='submit'>Publicar</button>
              <Link to={'/'}>
                <button className="cancel-button">Cancelar</button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-10 ml-2 gap-4 justify-auto">
        <div className="flex">
          <h4 className="items-center">
            <img src={logo} alt="arqnex" className="h-6" />
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