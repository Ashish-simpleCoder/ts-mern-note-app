const genLoginError = (type:string, login?:boolean|string) => {
    const invalid = 'invalid credentails'
    const status = 400
    const {mode} = process.env
    // if user does not enter email or password then throw the below errors
    if(login){
        if(type === 'email') return {email:'email is required',status}
        if(type === 'password') return {password:'password is required',status}
    }
    if(mode === 'dev'){
        if(type === 'email') return {email:'email is invalid',status}
        if(type === 'password') return {password:'password is invalid',status}
    }else{
        return {error:invalid,status}
    }
}
export default genLoginError