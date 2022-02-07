import { sign } from "jsonwebtoken"
import { UserType } from "../schemas/user.schema"

const generateLoginToken = async(user:UserType) => {
    const secret = process.env.secret || 'yoursecretkey'
    return sign({email:user.email,_id:user._id},secret)
}
export default generateLoginToken