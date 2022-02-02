const fetchUser = async() =>{
    try {
        const res = await fetch('/api/v1/user',{method:'get',headers:{'Content-Type':'application/json'}})
        const data = await res.json()
        return {_id:data._id}
    } catch (error) {
        console.log(error)
    }
}
export default fetchUser