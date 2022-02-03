import { NoteInterface } from "../types"

const fetchNotes = async(url:string) =>{
    try {
        const res = await fetch(url)
        const data:{notes?:NoteInterface[]} = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
export default fetchNotes