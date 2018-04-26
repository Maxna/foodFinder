import $ from 'jquery';

class API {
  randomCall(){
    let randomOutput  = $.get('https://www.themealdb.com/api/json/v1/1/random.php');
    return randomOutput;
  }
  searchByCall(query){
    return $.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`);
  }
}

export { API };
