import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must contain 3 character."],
        maxlength: [30, "Name cannot exceed 30 character."]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide valid Email."]
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    niches:{
        firstNiche: String,
        secondNiche: String,
        thirdNiche: String,
        
    },
    password:{
        type: String,
        required: true,
        minLength: [8, "Passsword must contain at least 8 characters."],
        maxlength: [32, "Password cannot exceed 32 characters."],
        select: false,
    },
    resume:{
        pubic_id: String,
        url: String,
    },
    coverletter:{
        type: String,
    },
    role:{
        type: String,
        required: true,
        enum: ["job seeker", "employer"]
    },
    createdat:{
        type: Date,
        default: Date.now,
    },


});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });


userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
export const User = mongoose.model("User", userSchema)