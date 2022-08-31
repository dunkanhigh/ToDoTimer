import HTTP from './common'

export const ToDo = {
    create(config) {
        return HTTP.post('/todo/', config).then(response => {
            return response.data
        })
    },
    delete(config) {
        return HTTP.delete(`/todo/${todo.id}`)
    },
    list() {
        return HTTP.get('/todo/').then(response => {
            return response.data
        })
    }
}