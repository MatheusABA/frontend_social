import React, { useState } from 'react';
import './UploadDetails.css'; // Nome do arquivo CSS que você criará para estilizar esta página
import uploadImage from '../images/upload_details.png';
import Tag from '../components/Tag'; // Importe o componente Tag
import logo from '../images/arqnex_rodape.png'

function UploadDetails() {
  // Substitua `uploadedImage` pelo caminho da imagem carregada pelo usuário
  const uploadedImage = uploadImage;

  const [tags, setTags] = useState(['VRay']); // Exemplo de estado inicial

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  return (
  <>  
    <div className="details-container">
      <h2 className="details-title">Adicionar detalhes</h2>
      <p className="details-description">Fale mais sobre seu trabalho.</p>
      
      <div className="flex-container">
        <div className="image-preview-container">
            <img src={uploadedImage} alt="Imagem Carregada" className="uploaded-image" />
            <div className="attachments-title">
              <span className="attachments-style">Anexos</span> <span className="pro-style">PRO</span>
            </div>
            <div className="additional-images-container">
            {/* Substitua os placeholders por lógica para mostrar imagens adicionais ou inputs para upload */}
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
            {/* Adicione mais conforme necessário */}
            </div>
        </div>

        <div className="form-container">
            {/* Formulário com seus campos */}
            <div className="form-fields">
            <h3 className='forms-titles'>Título</h3>
            <input type="text" className="input-field" />
            <h3 className='forms-titles'>Softwares</h3>
            <select className="input-field">
                <option></option>
                {/* Opções */}
            </select>
            <div className="tags-container">
             {tags.map((tag, index) => (
               <Tag key={index} label={tag} onDelete={() => handleDeleteTag(tag)} />
             ))}
            </div>
            <h3 className='forms-titles'>Estilos</h3>
            <select className="input-field">
                <option></option>
                {/* Opções */}
            </select>
            <h3 className='forms-titles'>Projeto</h3>
            <select className="input-field">
                <option></option>
                {/* Opções */}
            </select>
            <h3 className='forms-titles'>Tipo</h3>
            <select className="input-field">
                <option></option>
                {/* Opções */}
            </select>
            <h3 className='forms-titles'>Descrição</h3>
            <textarea 
            className="input-field description-textarea"
            rows="4"
            ></textarea>
            </div>

            <div className="actions">
            <button className="publish-button" font-weight="bold">Publicar</button>
            <button className="cancel-button">Cancelar</button>
            </div>
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

export default UploadDetails;
