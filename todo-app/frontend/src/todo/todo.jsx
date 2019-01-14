import React, { Component } from 'react'
import PageReader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './TodoList'

export default class Todo extends Component{
    render(){
        return (
            <div>
                <h1>TESTE</h1>
                <PageReader name='Tarefas' small='Cadastro'/>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }
}