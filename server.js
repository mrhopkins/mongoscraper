// Dependencies
var express = require("express");
var express-handlebars = require("express-handlebars");
var mongoose = required("mongoose");
// Require axios and cheerio. This makes the scraping possible
var cheerio = require("cheerio");
var axios = require("axios");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "mongoHeadlines";
var collections = ["scrapedData"];

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);