const updateNote = async (url:string, note:{
    title:string,
    content:string,
    _id:string,
    bg:string[]
}) =>{
    console.log(note)
    try {
        const res = await fetch(url,{
            method:'PATCH',
            body:JSON.stringify(note),
            headers:{'Content-Type':'application/json'}
        })
        const data:{success:boolean} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default updateNote