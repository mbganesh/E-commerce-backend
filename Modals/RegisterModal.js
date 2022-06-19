import mongoose from "mongoose";

// DocumentName
const DocumentName = 'LoginCredential'

// schema

var schema = mongoose.Schema({
    name: String,
    emailId: String,
    phoneNo: String,
    password: String,
    userId:String,
    color:String
},
    {
        timestamps: true
    }
)

// modal

var modal = mongoose.model(DocumentName, schema, DocumentName)

export default modal