const fetchUser = async() =>{
    try {
        const res = await fetch('/api/v1/user',{method:'get',headers:{'Content-Type':'application/json'}})
        const data = await res.json()
        console.log(data)
        return {_id:data._id, email:data.email}
    } catch (error) {
        console.log(error)
    }
}
export default fetchUser