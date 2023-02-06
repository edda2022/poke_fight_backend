const mongoose = require("mongoose")
require("dotenv/config");
require('dotenv').config()

mongoose.connect(process.env.SECRET_KEY)