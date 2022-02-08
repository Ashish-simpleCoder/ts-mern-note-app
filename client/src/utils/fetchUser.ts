const fetchUser = async() =>{
    try {
        const res = await fetch('https://ts-mern-note-api.herokuapp.com/api/v1/user',{method:'get',headers:{'Content-Type':'application/json'}})
        const data = await res.json()
        return {_id:data._id, email:data.email}
    } catch (error) {
        console.log(error)
    }
}
export default fetchUser