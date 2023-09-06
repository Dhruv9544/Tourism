const FormDataModel = require('../model/FormDataModel')
const express = require("express")

const {MONGO_URI} = process.env

// const mongo_url = "mongodb+srv://devamdoshi4:tourismdeproject@cluster0.tqaiejt.mongodb.net/Tourism"
const {MongoClient} = require('mongodb')

module.exports.getAllDistricts = async function(req,res) {

   
    MongoClient.connect(MONGO_URI, function (err, db) {
        if (err) console.log(err);;
    
        var coll = db.collection('Districts');
    
        coll.find({}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                console.log("hello");
                res.send(JSON.stringify(result));
            }
        })
    
    });
    }