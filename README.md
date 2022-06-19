# E-commerce-backend

![ExpressJS](https://user-images.githubusercontent.com/51211116/174465726-656b430f-8fe3-465c-a5a5-f511647fb378.png "Express JS Logo")

![MongoDB](https://user-images.githubusercontent.com/51211116/174465860-11ae6e6d-fffa-4702-adb0-ebe066862f76.png "Mongo DB Logo")

## Day-1

SignUp API
--------

API | Body | Header | Success | Failed
:--- | :---: | :---: | :--- | :---: 
http://192.168.1.2:3030/api/signup | ```{ "name": "Ganesh", "emailId": "mbganeshdev@gmail.com", "phoneNo": "123", "password": "123" }``` | - | ```{ "message": "User Added Successfully", "success": true }``` | ```{ "message": "PhoneNO/EmailID already Exist", "success": false }```
http://192.168.1.2:3030/api/signin | ```{ "userName":"mbganesh@gmail.com", "password": "1234" }``` | - | ```{ "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJuYW1lIjoiR2FuZXNoIiwiZW1haWxJZCI6Im1iZ2Fuob25lTm8iOiIxMjM0NTYiLCJ1c2VySWQiOiIzNDMsasifSwiaWF0IjoxNjU1NjMjA2NjJ9._Hw08ODIIx6IDfdUvVJOv8", "success": true }``` | ```{ "message": "Invalid UserName or Password", "success": false }```

