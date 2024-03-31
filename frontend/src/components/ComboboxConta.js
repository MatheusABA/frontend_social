import React from 'react'
import Combobox from 'react-widgets/Combobox'


function ContaCB() {
    const conta = [
        { tipo: "Academico", Categoria: 'Mostrar o meu talento', id:'0'},
        { tipo: "Formado", Categoria: 'Mostrar o meu talento', id:'1'},
        { tipo: "Escritório de Arquitetura", Categoria: "Em busca de talentos", id:"2"},
        { tipo: "Escritório de Design", Categoria: "Em busca de talentos", id:"3"},
        { tipo: "Escritório de Engenharia", Categoria: "Em busca de talentos", id:"4"},
        { tipo: "Escritório do Ramo", Categoria: "Em busca de talentos", id:"5"},
    ];

    // const campos = {groupBy: 'Categoria', text: 'tipo', value: 'id'};
    const value = ''

    return (
        <Combobox
            className='w-full'
            data={conta}
            textField="tipo"
            onSelect={value}
            groupBy="Categoria"
            placeholder="Selecione um tipo de conta"
        />
    );
};


export default ContaCB;