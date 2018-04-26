import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './../src/ping.js';
$(document).ready(function(){
  let newCall;
  newCall = new API();
  $('#random').click(function(){
    let randomMeal;
    randomMeal = newCall.randomCall();
    randomMeal.then(function(response){
      $('.output').append('<h3>'+`${response.meals[0].strMeal}`+'</h3>');
      $('.output').append('<h4>'+`${response.meals[0].strArea}`+'</h4>');
    }).fail(function(error){
    $('.output').text(`there was an error processing your request: ${error.responseText}`);
  });
});
  $(".form").submit(function(event){
    event.preventDefault();
    let query;
    query = $('#search').val();
    let searchResult = newCall.searchByCall(query);
    searchResult.then(function(response){
      // let foodThing = `${response.meals}`
      // let arrayLength = foodThing.length;
      // console.log(arrayLength);
      let i = Math.floor(Math.random() * (15 - 0));
      if (`${response.meals[i].strMeal}` === undefined){
        i = Math.floor(Math.random() * (5-0));
      }
      // console.log(i);
      $('.output').append('<h3>'+`${response.meals[i].strMeal}`+'</h3>')
      $('.output').append('<h5>'+query+'</h5>')
    }).fail(function(error){
      $('.output').text(`there was an error processing your request: ${error.responseText}`);
    });
  });
});
