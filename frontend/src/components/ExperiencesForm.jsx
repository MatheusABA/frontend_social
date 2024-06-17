import { React, useState } from 'react';
import '../style.css';

const ExperiencesForm = () => {

    const [formData, setFormData] = useState({
        cargo: '',
        empresa: '',
        telf_empresa: '',
        remuneracao: '',
        data_admissao: '',
        data_saida: ''
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
        setSuccessMessage('Experiência adicionada com sucesso!');
    };

    return (
        <form className="formation-form-container" method='POST' onSubmit={handleSubmit}>
            {/* Formulário */}
            <div className="form-fields">
            <h3 className='forms-titles'>Cargo</h3>
            <input
            type="text"
            className="input-field"
            name="cargo"
            value={formData.cargo}
            onChange={handleInputChange}
            />

            <h3 className='forms-titles'>Empresa</h3>
            <input
            type="text"
            className="input-field"
            name='empresa'
            value={formData.empresa}
            onChange={handleInputChange}
            />

            <div className="form-anos">
                <div className="ano-container">
                    <h3 className="title-anos">Telefone da Empresa</h3>
                    <input
                        type="number"
                        className="input-field-anos"
                        name="telf_empresa"
                        value={formData.telf_empresa}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ano-container">
                    <h3 className="title-anos">Remuneração</h3>
                    <input
                        type="number"
                        className="input-field-anos"
                        name="remuneracao"
                        value={formData.remuneracao}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='form-anos'>
            <div className="ano-container">
                    <h3 className="title-anos">Data de admissão</h3>
                    <input
                        type="month"
                        className="input-field-anos"
                        name="data_admissao"
                        value={formData.data_admissao}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="ano-container">
                    <h3 className="title-anos">Data de saída</h3>
                    <input
                        type="month"
                        className="input-field-anos"
                        name="data_saida"
                        value={formData.data_saida}
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

export default ExperiencesForm;