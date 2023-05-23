import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    username : {
        type: String,
        required : [true, "Please provide Username"],
        unique: false,
    },
    role : {
        type: String,
    }
    
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);