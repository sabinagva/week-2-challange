console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    //event listeners
    $('#addJokeButton').on('click',addJoke);
    
}
function getJokes() {
    //requesting jokes data from the server
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function(response){//res holds whatever got sent from server
        console.log('success', response)
        renderToDom(response);
        
    }).catch(function(error){ 
        alert('request failed!'); 
        console.log('request failed:', error)
    })
   

}
function renderToDom(jokesArray){
    $('#jokeList').empty();
    for (joke of jokesArray)
    $('#jokeList').append(`<div>Joker:${joke.whoseJoke} Joke Question: ${jokeQuestion} Punchline:${punchLine}</div>
    `)

}

function addJoke (event){
    event.preventDefault();
    //add inputs
    const joker = $('#whoseJokeIn').val();
    const jokeQuestion = $('#questionIn').val();
    const punchLine = $('#punchlineIn').val();

    //clear inputs
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: {
            whoseJoke: whoseJoke,
            jokeQuestion: jokeQuestion,
            punchLine: punchLine

        }
    }).then(function(response){
        console.log('success');
        getJokes()
        
    }).catch(function(error){
        alert('error with cakes post');
        console.log('error with post', error);
    
    }) 

}