import axios from 'axios';
import router from '../../router'

export function login({commit}) {
    axios
        .post("http://138.68.74.39/api/login?%22,%7Bemail: data.email, password: data.password")
        .then(function (response) {
            commit("SET_TOKEN", response.data)
            router.push("/")
        })
        .catch(function (error) {
            console.log(error)
        })
}