import Token from './Token'

class User {
    login(data){
        axios.post('/api/auth/login', data)
        .then(res => {
            Token.payload(res.data.access_token)
        })
        .catch(error => console.log(error.response.data))
    }
}

export default User = new User()