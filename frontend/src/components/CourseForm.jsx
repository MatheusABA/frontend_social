import { React, useState } from 'react';
import '../style.css';

const CourseForm = () => {

    const [formData, setFormData] = useState({
        escolaridade: '',
        formacao: '',
        faculdade: '',
        situacao: '',
        anoinicio: '',
        anofim: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione aqui a lógica de submissão do formulário
        // Por exemplo, você pode enviar os dados para um servidor ou realizar outras ações necessárias
        console.log('Form data submitted:', formData);
        setSuccessMessage('Formação enviada com sucesso!');
    };

    return (
        <form className="formation-form-container" method='POST' onSubmit={handleSubmit}>
            {/* Formulário */}
            <div className="form-fields">
            <h3 className='forms-titles'>Curso</h3>
            <input
            type="text"
            className="input-field"
            name="curso"
            value={formData.curso}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Instituição</h3>
            <input
            type="text"
            className="input-field"
            name='instituicao'
            value={formData.instituicao}
            onChange={handleInputChange}
            />

            <div className="form-anos">
                <div className="ano-container">
                    <h3 className="title-anos">Carga horária</h3>
                    <input
                        type="text"
                        className="input-field-anos"
                        name="horas"
                        value={formData.horas}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ano-container">
                    <h3 className="title-anos">Ano de conclusão</h3>
                    <input
                        type="text"
                        className="input-field-anos"
                        name="anoconclusao"
                        value={formData.anoconclusao}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            </div>

            <div className="formations-actions">
            <button className="add-formation-button" font-weight="bold" type='submit'>Adicionar mais</button>
            <button className="save-formation-button" font-weight="bold" type='submit'>Salvar</button>
            </div>
            {error && <div className='error'><span className='rounded-lg border-2 border-red-400 bg-red-200 p-2'>{error}</span></div>}
            {successMessage && <div className='success'><span className='rounded-lg border-2 border-green-400 bg-green-200 p-2'>{successMessage}</span></div>}
        </form>
    )
};

export default CourseForm;