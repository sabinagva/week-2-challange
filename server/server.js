const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokesArray = [
  // {
  //   whoseJoke: "Danny",
  //   jokeQuestion: "Why do scuba divers fall backwards out of boats?",
  //   punchLine: "If they fell forwards they’d still be in the boat!"
  // },
  // {
  //   whoseJoke: "Luke",
  //   jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
  //   punchLine: "Do you know how to drive this thing?"
  // },
  // {
  //   whoseJoke: "Millie",
  //   jokeQuestion: "What do you call a pile of cats?",
  //   punchLine: "A meowntain!"
  // },
  // {
  //   whoseJoke: "dEv",
  //   jokeQuestion: "Why should you not play cards in the forest?",
  //   punchLine: "Too many Cheetahs!"
  // },
  // {
  //   whoseJoke: "Scott",
  //   jokeQuestion: "I went to the zoo the other day, it had one dog...",
  //   punchLine: "It was a shih tzu."
  // }
];
// serve back static files
app.use(express.static('server/public'));

//get routes

app.get('/jokes', function(req,res){
  console.log('request for jokes was made');
  res.send(jokesArray); //send respond to the client
})
//post routes
app.post('/jokes', function(req, res){
  //req.body is data client sends in its request
  //its from body parser 
  console.log('post my data', req.body);
  jokesArray.push(req.body); //will allow us to push new jokes in
  res.sendStatus(201) 
})




app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
