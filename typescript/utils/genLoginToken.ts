import { sign } from "jsonwebtoken"
import { UserType } from "../schemas/user.schema"

const generateLoginToken = (user:UserType) => {
    const secret = process.env.SECRET || 'yoursecretkey'
    return sign({email:user.email,_id:user._id},secret)
}
export default generateLoginToken