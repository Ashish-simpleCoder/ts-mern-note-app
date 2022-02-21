import { genSalt, hash } from "bcrypt"
import { model, Schema, Document } from "mongoose"
import validator from 'validator'

const USER_SCHEMA = new Schema({
    email:{
        type:String,
        unique:true,
        required:[true, 'email is required'],
        validate: [validator.isEmail, 'please enter valid email']
    },
    password:{
        type:String,
        required:[true, 'password is required'],
        minlength:[4, 'password length must be greater than 4 characters']
    },
    notes:[
        {
            title:{type:String},
            content:{type:String},
            delete:{type:Boolean, default:false},
            bg:{
                type:{},
                // default: [ '#fff', '#1a1a1a' ],
                default: [ '#fff', '#000' ],
            },
        }
    ]
})

USER_SCHEMA.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await hash(this.password, await genSalt(10))
        next()
    }
})

const USER_MODEL = model('user', USER_SCHEMA)
export default USER_MODEL



export interface UserType extends Document{
    _id:string,
    email:string,
    password:string,
    notes:{
        title?:string,
        content?:string
        bg?:[],
        _id?:Schema.Types.ObjectId
    }[],
}