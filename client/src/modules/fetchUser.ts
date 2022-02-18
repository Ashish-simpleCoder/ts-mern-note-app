const fetchUser = async() =>{
    try {
        const res = await fetch('/api/v1/user',{method:'GET',headers:{'Content-Type':'application/json'}})
        const data:{_id:string, email:string} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default fetchUser