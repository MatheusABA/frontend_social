import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style.css'; // Certifique-se de criar um arquivo CSS correspondente
import uploadIcon from '../images/upload.png';


const Upload = (props) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  
  const location = useLocation();
  const userId = location.state?.userId;
  console.log(userId);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedFile(reader.result);
        navigate(
          "/uploaddetails",
          { state: { image: reader.result, userId: userId } }
        );
      };
    };
    
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
          <span className="material-icons icon-photo">image</span>
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
