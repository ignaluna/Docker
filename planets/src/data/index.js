const planets = axios.get("http://database:8005/planet");

module.exports = {
list: async () =>{
    return planets
}
}