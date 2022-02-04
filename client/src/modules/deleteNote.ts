const deleteNote = async(url:string) =>{
    try {
        const res = await fetch(url, {method:'DELETE'})
        const data:{success:true} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default deleteNote