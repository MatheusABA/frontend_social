import { React, useState } from 'react';
import '../style.css';

const FormationForm = () => {

    const [formData, setFormData] = useState({
        escolaridade: '',
        formacao: '',
        faculdade: '',
        situacao: '',
        anoinicio: '',
        anofim: '',
        turno: '',
        semestre: ''
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
            <h3 className='forms-titles'>Escolaridade</h3>
            <input
            type="text"
            className="input-field"
            name="escolaridade"
            value={formData.escolaridade}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Formação</h3>
            <input
            type="text"
            className="input-field"
            name='formacao'
            value={formData.formacao}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Instituição de Ensino</h3>
            <input
            type="text"
            className="input-field"
            name='faculdade'
            value={formData.faculdade}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Situação</h3>
            <select
            type="text"
            className="input-field"
            name='situacao'
            value={formData.situacao}
            onChange={handleInputChange}
            >
                <option value="0"></option>
                <option value="Completo">Completo</option>
                <option value="Incompleto">Imcompleto</option>
            </select>

            <div className="form-anos">
                <div className="ano-container">
                    <h3 className="title-anos">Ano de início</h3>
                    <input
                        type="number"
                        className="input-field-anos"
                        name="anoinicio"
                        value={formData.anoinicio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ano-container">
                    <h3 className="title-anos">Ano de término</h3>
                    <input
                        type="number"
                        className="input-field-anos"
                        name="anofim"
                        value={formData.anofim}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='form-anos'>
            <div className="ano-container">
                    <h3 className="title-anos">Turno</h3>
                    <input
                        type="text"
                        className="input-field-anos"
                        name="turno"
                        value={formData.turno}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ano-container">
                    <h3 className="title-anos">Semestre</h3>
                    <input
                        type="text"
                        className="input-field-anos"
                        name="semestre"
                        value={formData.semestre}
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

export default FormationForm;