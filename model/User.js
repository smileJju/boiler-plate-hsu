const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    // 이름
    name: {
        type: String,
        maxlength: 50
    },

    // 이메일정보
    email: {
        type: String,
        trim: true, //빈칸을 없애줌
        unique: 1 //같은 메일 활용 불가
    },

    lastname: {
        type: String,
        minlength: 50
    },

    password: {
        type: String,
        minlength: 5
    },

    // 관리자 , 일반유저 구분
    role: {
        type: Number,
        default: 0
    },

    image: String,

    token:{
        type: toString,
    }, 

    // token 유효기간
    tokenExp:{
        type: Number

    }
})

const User = mongoose.model('User', userSchema)

modele.exports = { User }