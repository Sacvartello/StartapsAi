const express = require('express');
const openai = require('../routes/rootRouter')
module.exports.createMessage = async (req, res, next) => {
    try {
        clg('g')
        const{promt} = req.body
        console.log(promt);
        const response = await openai.chat.completions.create({messages:[{role:'user',content:`${promt}`}],model:'gpt-4o-mini'})
        res.send(response.choices[0].message)
        
    } catch(error) {
        next(error)
    }
}