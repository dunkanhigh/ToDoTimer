// import { ToDo } from '../api/todos'
// import { ADD_TODO, REMOVE_TODO, SET_TODO } from './mutation-types'
import { createStore } from 'vuex'
export const store = createStore({
    //State
    state: {
        token: '',
        isAuthenticated: false,
    },
    //Mutations
    mutations: {
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
        }
    },
    actions: {

    },
    modules: {

    },
})