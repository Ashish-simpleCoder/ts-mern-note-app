const createNote = async(note:{title:string, content:string})=>{
    try {
        const res = await fetch('/api/v1/user/note',{
            method:'POST',
            body:JSON.stringify(note),
            headers:{'Content-Type':'application/json'}
        })
        const data:{success:boolean,error?:string} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default createNote