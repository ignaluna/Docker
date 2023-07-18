const films = axios.get("http://database:8005/film");
module.exports = {
list: async () =>{
    return films
}
}