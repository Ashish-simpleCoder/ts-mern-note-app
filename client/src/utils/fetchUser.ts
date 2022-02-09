const fetchUser = async() =>{
    try {
        const res = await fetch('/api/v1/user',{method:'GET',headers:{'Content-Type':'application/json'}})
        const data = await res.json()
        return {_id:data._id, email:data.email}
    } catch (error) {
        console.log(error)
    }
}
export default fetchUser