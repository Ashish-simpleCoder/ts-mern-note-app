const deleteNote = async(url:string, MOVE_TO_BIN:boolean=true, RESTORE:boolean=false) =>{
    try {
        const res = await fetch(url, {method:'DELETE',headers:{'Content-Type':'application/json'}, body:JSON.stringify({MOVE_TO_BIN, RESTORE})})
        const data:{success:true} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default deleteNote