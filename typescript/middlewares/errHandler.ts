const errHandler = async(err:any, req:any, res:any, next:any) => {
    const errors:any = { email:'', password:'',err:'' }

    // if login  credentials are wrong then dev has to show the errors to the user
    const {email, password, status, error, mode} = err
    if(email || password){
        email && (errors.email = err.email)
        password && (errors.password = err.password)
        return res.status(status ? status : 200).send({errors})
    }
    // dev has to show the errors occured during the login process
    if(error){
        if(mode === 'note'){
            return res.status(status ? status : 200).send({error})
        }
        errors.err = error
        return res.status(status ? status : 200).send({errors})
    }

    // if registered email comes again for registration then dev has to show unique emai error
    if(err.code === 11000){
        errors.email = 'email is already registered'
        return res.status(500).send({errors})
    }


    // if validation errors occurs during registration then show the user errors
    if(err?.message?.includes('validation failed')){
        Object.values(err.errors).forEach((value:any) => {
            const {path,message} = value?.properties
            errors[path] = message
        } )
        return res.status(500).send({errors})
    }
}
export default errHandler