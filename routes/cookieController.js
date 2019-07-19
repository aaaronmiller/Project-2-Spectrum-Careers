// module.exports = function (app) {

//     //IS THIS RECURSION????? IF SO THATS AMAZING!!!!!!!!!
//     //IF THERE ARE COOKIES AND THE USER IS NOT LOGGED IN DELETE COOKIES
//     app.use((req, res, next) => {
//         if (req.cookies.user_sid && !req.session.user) {
//             res.clearCookie('user_sid');
//         }
//         next();
//     });

//     // check logged in users
//     var sessionChecker = (req, res, next) => {
//         if (req.session.user && req.cookies.user_sid) {
//             res.redirect('/user/profile');
//         } else {
//             next();
//         }
//     };

//     // route for Home-Page
//     app.get('/', sessionChecker, (req, res) => {
//         res.redirect('/profile')
//     });

//     // route for user signup
//     app.route('/user/profile')
//         .get(sessionChecker, (req, res) => {
//             res.sendFile(__dirname + '/public/signup.html');   //???? 
//         })
//         .post((req, res) => {
//             User.create({
//                 username: req.body.firstname,
//                 description: req.body.bio,

//                 // email: req.body.email,
              
//             })
//                 .then(user => {
//                     req.session.user = user.dataValues;
//                     res.redirect('/dashboard');
//                 })
//                 .catch(error => {
//                     res.redirect('/signup');
//                 });
//         });


//     // route for user's dashboard
//     app.get('/dashboard', (req, res) => {
//         if (req.session.user && req.cookies.user_sid) {
//             res.sendFile(__dirname + '/public/dashboard.html');
//         } else {
//             res.redirect('/login');
//         }
//     });

//     // route for user logout
//     app.get('/logout', (req, res) => {
//         if (req.session.user && req.cookies.user_sid) {
//             res.clearCookie('user_sid');
//             res.redirect('/');
//         } else {
//             res.redirect('/login');
//         }
//     });


//     // route for handling 404 requests(unavailable routes)
//     app.use(function (req, res, next) {
//         res.status(404).send("Sorry can't find that!")
//     });



// };
