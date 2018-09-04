class AppStorage{
    
    storeToken(){
        localStorage.setItem('token', token);
    }
    storeUser(){
        localStorage.setItem('user', user);
    }

    store(user, token){
        this.storeToken(token)
        this.storeUser(user)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    getToken(){
        return localStorage.getItem('token')
    }
    
    getUser(){
        return localStorage.getItem('user')
    }

}
export default AppStorage = new AppStorage()