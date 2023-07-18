const axios = require("axios");

const Characters = axios.get("http://database:8005/character");

module.exports = {
list: async () =>{
    return Characters
}
}