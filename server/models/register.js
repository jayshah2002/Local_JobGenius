const mongoose=require("mongoose");
const bcrpty = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerSchema=new mongoose.Schema({
    name:{type:String,require: [true, "Please enter name"]},
    email:{type:String,require: [true, "Please enter email"]},
    password:{type:String,require: [true, "Please enter password"]},
    workstatus:{type:String,require: [true, "Please Select your status"]},
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
})

registerSchema.pre("save", async function (next) {
    console.log("enter schema");
  
    if (this.isModified("password")) {
      console.log("save password function in");
      const salt = await bcrpty.genSalt(10);
      const hash = await bcrpty.hash(this.password, salt);
      this.password = hash;
    }
    next();
  });
registerSchema.methods.generateAuthToken = async function () {
    try {
      let tokentha = jwt.sign({ _id: this._id }, process.env.KEY);
      this.tokens = this.tokens.concat({ token: tokentha });
      await this.save();
      return tokentha;
    } catch (err) {
      console.log(err);
    }
  };

const User=mongoose.model("mainuser",registerSchema);

module.exports=User; 