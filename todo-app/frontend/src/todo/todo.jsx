import React, { Component } from 'react'


import PageReader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './TodoList'

export default props => (
    <div>
    <h1>Tarefas</h1>
    <PageReader name='Tarefas' small='Cadastro'/>
    <TodoForm/>
    <TodoList/>
    </div>

    )
