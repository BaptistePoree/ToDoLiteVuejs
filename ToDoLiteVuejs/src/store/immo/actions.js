// actions
import axios from 'axios';

export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                commit("load", response.data);
            })

}

export function signup({commit},data) {

    var username = data.user
    var password = data.password
    var mail = data.email

    console.log("fonction signup d'action.js appelée");
    console.log(username, password, mail);
    axios.post("http://138.68.74.39/api/register?name="+username+"&email="+mail+"&password="+password)
      .then(function (response) {
        // handle success
        console.log(response);
        commit("setToken", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }