import mongoose from "mongoose";

const { model, models, Schema } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    bio: {
        type: String,
        default: "",
    },
    username: {
        type:String,
        required :true,
        unique:true,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    password: {
        type: String,
        required: true,
        select: false, // query se ham password nahi le sakte hai
    }
},{
    timestamps: true,
});

// PASSWORD HASHING (Save hone se pehle) taaki har baar automatically ho jaye esliye model me hi kr diye 
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next(); // password modify nahi hua to next pe jao
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password)
 {
    return await bcrypt.compare(password, this.password);
 }
export default models.User || model("User", userSchema);