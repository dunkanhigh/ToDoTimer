import Vuex from 'vuex'
import { ToDo } from '../api/todos'
import { ADD_TODO, REMOVE_TODO, SET_TODO } from './mutation-types'
//State
const state = {
    todos: [],
    token: '',
    isAuthenticated: false,
}
//Getters
const getters = {
    todos: state => state.todos
}
//Mutations
const mutations = {
    initializeStore(state) {
        if (localStorage.getItem('token')) {
            state.token = localStorage.getItem('token')
            state.isAuthenticated = true
        } else {
            state.token = ''
            state.isAuthenticated = false
        }
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
    [ADD_TODO](state, todo) {
        state.todos = [todo, ...state.todos]
    },
    [REMOVE_TODO](state, { id }) {
        state.todos = state.todos.filter(todo => {
            return todo.id != id
        })
    },
    [SET_TODO](state, { todos }) {
        state.todos = todos
    },
}
const actions = {
    createToDo({ commit }, todoData) {
        ToDo.create(todoData).then(todo => {
            commit(ADD_TODO, todo)
        })
    },
    deleteToDo({ commit }, todo) {
        ToDo.delete(todo).then(todo => {
            commit(REMOVE_TODO, todo)
        })
    },
    getToDos({ commit }) {
        ToDo.list().then(todos => {
            commit(SET_TODO, { todos })
        })
    },
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})