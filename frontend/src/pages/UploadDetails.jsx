import { React, useState } from 'react';
import '../style.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import { Link } from 'react-router-dom'
import Tag from '../components/Tag'; // Importe o componente Tag
import logo from '../images/arqnex_rodape.png'
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const UploadDetails = (props) => {

  // flash messages de erro - sucesso
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('');

  // IMAGEM
  const location = useLocation();
  
  const { image, userId } = location.state;
  console.log(userId)
  // DADOS ENVIADOS
  const [formData, setFormData] = useState({
    userId: userId,
    titlePost:'',
    softwares: '',
    styles: '',
    projects: '',
    types: '',
    descriptionPost: '',
    imagePost: image
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

    try {
      const response = await fetch('http://3.22.240.190:3050/user/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          titlePost: formData.titlePost,
          softwares: formData.softwares,
          styles: formData.styles,
          projects: formData.projects,
          types: formData.types,
          descriptionPost: formData.descriptionPost,
          imagePost: image
        }),
        
      });

      console.log('userId:', userId);
      console.log('titlePost:', formData.titlePost);
      console.log('softwares:', formData.softwares);
      console.log('styles:', formData.styles);
      console.log('projects:', formData.projects);
      console.log('types:', formData.types);
      console.log('descriptionPost:', formData.descriptionPost);
      console.log('imagePost:', image);
    
      if (response.ok) {
        console.log('Postagem feita com sucesso!');
        setSuccessMessage('Postagem feita com sucesso!')
      } else {
        console.log('Erro ao fazer postagem!')
        setError('Erro ao fazer postagem!')
      }

      
    } catch (error) {
      console.error('Erro:', error);
    }
  };


  return (
  <>  
    <div className="details-container">
      <h2 className="details-title">Adicionar detalhes</h2>
      <p className="details-description">Fale mais sobre seu trabalho.</p>
      
      

      <div className="flex-container">
        <div className="image-preview-container">
            <img src={image} alt="Imagem Carregada" className="uploaded-image" />
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
            {error && <div className='error'><span className='rounded-lg border-2 border-red-400 bg-red-200 p-2'>{error}</span></div>}
            {successMessage && <div className='success'><span className='rounded-lg border-2 border-green-400 bg-green-200 p-2'>{successMessage}</span></div>}
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

