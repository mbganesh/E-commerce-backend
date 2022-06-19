import 'dotenv/config'
import express from "express";
import generateUniqueId from "generate-unique-id";
import LoginCredential from '../Modals/RegisterModal.js'
import randomColor from 'randomcolor'

import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/' , (req , res) => {
    res.json({API:"works"})
})

router.post('/signup' , async (req , res) => {

    try {
        var reqData = req.body

        var foundUser = await LoginCredential.find({$or:[{emailId:reqData.emailId} , {phoneNo:reqData.phoneNo}]})

        if(foundUser.length === 0){
            // reqData['userId'] = 'user-'+generateUniqueId({length:6 , useLetters:false})

            reqData['color'] = randomColor({luminosity:"dark"})
            await LoginCredential.insertMany(reqData)

            return res.json({message:'User Added Successfully' ,success:true})
        }else{
            return res.json({message:'PhoneNO/EmailID already Exist',success:false})
        }


    } catch (error) {
        return res.json({message:'Server down [catch]',success:false})
    }

})


router.post('/signin' , async (req , res) => {
    try {
        var reqData = req.body;

        const emailFilter = {
            emailId:reqData.userName,
            password:reqData.password
        }

        const mobFilter = {
            phoneNo:reqData.userName,
            password:reqData.password
        }

        var isEmail = reqData.userName.split('').includes('@')

        var filter = isEmail ? emailFilter : mobFilter
        
        var userData = await LoginCredential.findOne(filter ,  {_id:0,password:0,__v:0,createdAt:0,updatedAt:0})

        if(userData !== null){

            let token = jwt.sign({userData} , process.env.JWT_KEY , {expiresIn:'2h'})


            return res.json({message:token,success:true})

        }else{
            return res.json({message:'Invalid UserName or Password',success:false})
        }
        
        // return res.json({data:foundUser})

    } catch (error) {
        console.log(error);
        return res.json({message:'Server down [catch]',success:false})
    }
})


export default router