import React from 'react';
import './Upload.css'; // Certifique-se de criar um arquivo CSS correspondente
import uploadIcon from '../images/upload.png';

const Upload = (props) => {
  // Função para lidar com o evento de upload
  const handleUpload = (event) => {
    // Aqui você pode adicionar a lógica para lidar com o arquivo enviado
    console.log(event.target.files);
  };
  props.setIsUpload(true);

  return (
    <div className="upload-container">
      <header className="header">
        <h1>Qual seu último trabalho?</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
      </header>
      <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
        <div className="upload-instructions">
          <span class="material-icons icon-photo">image</span>
          <div className="instruction-text">
            <p className='photo-info'>Fotos de alta resolução</p>
            <p className='photo-type'>PNG, JPEG (800x600)</p>
          </div>
        </div>
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleUpload}
          multiple
        />
        <label htmlFor="fileInput" className="file-label">
          <img src={uploadIcon} alt="Upload" className="upload-icon"/>
          <p className='upload-info1'>Arraste para fazer o upload</p>
          <p>Ou clique para abrir a mídia</p>
          <p className='file-size'>(Máximo 100mb)</p>
        </label>
      </div>
      <footer className="footer">
        {/* Adicione links ou outras informações do footer aqui */}
      </footer>
    </div>
  );
}

export default Upload;
