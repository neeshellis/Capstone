"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");
const User = require("../models/user")

// const storeData = async (table, body, res) => {
    const storeUser= async () => {
    let response = await axios.get(`http://localhost:3000/User/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
        console.log(i.createdAt, i.updatedAt)
//Format this according to your table
        const formatObj ={
            username: i.username,
            password: i.password,
            firstname: i.firstname,
            secondname: i.secondname,
            email: i.email,
            mobile:i.mobile
        };
//change Table to the name of your table
        let [newi, created ] = await Models.User.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}


// const storeData = async (table, body, res) => {
    const storeAccommodation = async () => {
    let response = await axios.get(`http://localhost:3000/Accommodation/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
       i.id=parseInt(i.id)
//Format this according to your table
        const formatObj ={
            userid: i.userid,
            property: i.property,
            address: i.address,
            maxguest: i.maxguest,
            
        };
//change Table to the name of your table
        let [newi, created ] = await Models.Accommodation.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}



// const storeData = async (table, body, res) => {
    const storeBooking = async () => {
    let response = await axios.get(`http://localhost:3000/Booking/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
        i.id=parseInt(i.id)
//Format this according to your table
        const formatObj ={
            userid: i.userid,
            accommodationid: i.accommodationid,
            quantityofguests: i.quantityofguests,
            datein: i.datein,
            dateout: i.dateout,
            price: i.price
            // amount: i.amount
        };
//change Table to the name of your table
        let [newi, created ] = await Models.Booking.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}
module.exports = {
    storeUser, storeAccommodation, storeBooking
}

