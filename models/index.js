'use strict'
const User = require('./user'); //require the model
const Accommodation = require('./accommodation')
const Booking = require('./booking');
// const Review = require('./review');



async function init() {
await User.sync(); 
await Accommodation.sync()
await Booking.sync();
// await Review.sync();// sync the model
// also sync any extra models here
};

init();

module.exports = {
User, Booking, Accommodation// export the model
// also export any extra models here
};