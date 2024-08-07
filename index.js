const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require('mongoose');
const Contact = require("./models/contact.js");
const flash = require("connect-flash");
const session = require("express-session");
const ExpressError = require("./ExpressError");
const { contactSchema } = require("./models/schema.js");



const app = express();
const port = 3000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'mysecretcode',
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());

//Path,Views & EjsMate
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);

main().then(() => {
    console.log("Connected to Mongoose");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Wrap Async Function
function wrapAsync(fn) {
    return function (req, res, next) {
        return fn(req, res, next).catch((err) => next(err));
    }
}

//Validate Function
const validateContact = (req, res, next) => {
    let { error } = contactSchema.validate();
    if (error) {
        let msg = error.details.map((err) => err.message).join(",");
        throw next(new ExpressError(400, msg));
    } else {
        next();
    }
}

//Flash Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    next();
});

//Routes
app.get("/", (req, res) => {
    res.send("Hii I am root!");
});

//About Route
app.get("/about", (req, res) => {
    res.render("index.ejs");
});

//Skills Route
app.get("/about/skills", (req, res) => {
    res.render("skills.ejs");
});

//Project Route
app.get("/about/projects", (req, res) => {
    res.render("projects.ejs");
});

//Contact Route
app.get("/about/contact", (req, res) => {
    res.render("form.ejs");
});

app.post("/about", validateContact, wrapAsync(async (req, res) => {
    let info = new Contact(req.body.contact);
    await info.save();

    req.flash("success", "Thank You for Showing Intrest in my Portfolio!");
    res.redirect("/about");
}));

//Error Handling
app.all("*", (req, res, next) => {
    throw next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

app.listen(port, () => {
    console.log(`App is listening on port:${port}`);
});