const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
   
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log("log",log);
   next();
})

// app.use((req,res,next) => {
//    res.render('maintence.hbs');
// })

hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear();
})

hbs.registerHelper('Capital', (text) =>{
    return text.toUpperCase();
})

app.get('/', (req,res) => {
  // res.send('hello express');
  // res.send('<h1> hello express </h1>');
//    res.send({
//        name : 'ashwini',
//        likes : [
//            'food',
//            'traveling'
//        ]
//    })
res.render('home.hbs',{
    pageTitle : 'Home Page',
    pageContent : 'Welcome To Home Page',
  //  currentYear : new Date().getFullYear()
});

});

app.get('/about', (req,res) => {
   // res.send('about page');
   res.render('about.hbs',{
       pageTitle : 'About Page',
       pageContent : 'Welcome To About Page',
     //  currentYear : new Date().getFullYear()
   });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage : 'unable handle request'   
    })
 });

app.listen(5000,() => {
  console.log('App start at 5000 Port');
});