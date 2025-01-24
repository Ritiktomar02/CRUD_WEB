const mongoose=require('mongoose');

const URL="mongodb+srv://ritiktomar0209:x6A9Jg9BfHWHxZqV@cluster0.bba09.mongodb.net/CRUD"

exports.connect=()=>{

    mongoose.connect(URL).then(()=>{
        console.log('Connected to the database');
    })
    .catch((err)=>{
        console.log('Unable to connect to the database');
        console.log(err);
    })
}