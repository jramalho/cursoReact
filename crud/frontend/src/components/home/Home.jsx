import React from 'react'
import Main from '../template/Main'

export default props => (
    <Main icon="home" title="inicio"
        subtitle="Segundo Projeto do capítulo de React.">
        <div className='display-4'>Bem vindo!</div>
        <hr />
        <p className='mb-0'>Sistema para exemplificar a construção de um CRUD no React</p>
    </Main>
)