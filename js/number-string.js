/***********************************************************************************************************************************
Create a Web page with a textarea input field where the user enters numbers or text.

Each time the user submits the input, check whether it is a number. If it is a number, update the display to show how many numbers have been entered, the sum of the numbers, and the average of the numbers. If it is a string, concatenate it onto all of the other strings that have been entered, and display the number of strings that have been entered and the accumulated concatenation.

There should be a Reset button that allows the user to start over with a new sequence of numbers.

Optional feature: Determine, update, and display the frequency of words entered in the strings. Hints: Use an object where the property keys (names) will be the words you find, and the property values will be the number of times each is encountered. Split a string into an array of words. For each word in the array, if the word is already a property name, increment its value. Otherwise set the value to 1. To display the frequencies, get the object's keys and make a row in a table for each one.

***********************************************************************************************************************************/

//initialize variables

var input = "";

var num = {
  count : 0,
  sum : 0,
  avg : 0
};

var str = {
  count : 0,
  words : [],
  phrase : ""
};

resetPage();

//event listeners
$('#btn-submit').on('click', onClickSubmit);
$('#btn-reset').on('click', onClickReset);

function onClickSubmit(evt){  //event handler for the submit button
  
  evt.preventDefault();
  
  //If input is empty, display error. Trim the input of spaces first before checking for empty string
  if($.trim($('#inputText').val()) == ''){
    
    //alert('Input can not be left blank');
    displayError();
    
  }
  
  else{
    
    var input = $('#inputText').val();    

    if (isNaN(input)) { //it's a string

      //concatenate the input to the existing string 
      str.phrase += input.toString() + " ";
      str.words[str.count] = input.toString();
      
      //split the string into words
      /*var arr = input.split(' ');
      
      $.each( arr, function(value ){
        str.words.push(value);
      }); */   

      //increment the string count by 1
      str.count++;

      //display the concatenated string
      displayOutputStr();

    }
    else { //it's a number

      //increment the number count by 1
      num.count++;

      //add the input value to existing value to get the sum
      num.sum = num.sum + parseFloat(input);

      //calculate the average
      num.avg = num.sum/num.count;

      //display the output
      displayOutputNum();
    }
  }

}

function onClickReset(evt){ //event handler for the reset button
  
  evt.preventDefault();
  
  //reset the form
  resetForm();
  
  //re-initialize all variables
  input = "";

  num = {
  count : 0,
  sum : 0,
  avg : 0
  };

  str = {
  count : 0,
  words : [],
  phrase : ""
  };
  
  //hide the output
  resetPage();
  /*
  $('#table-num').hide();
  $('#table-str').hide();
  $('#table-word').hide();*/
  
}

function displayOutputNum(){

    //reset the form
    resetForm();
  
    $('#num-items').empty();
  
    tr = $( '<tr>' );

    td = $( '<td>' );
    td.text( num.count );
    tr.append( td );

    td = $( '<td>' );
    td.text( num.sum );
    tr.append( td );
  
    td = $( '<td>' );
    td.text( num.avg );
    tr.append( td );

    $('#num-items').append( tr );
  
    $('#table-num').show();
}

function displayOutputStr(){
  
    //reset the form
    resetForm();
  
    $('#str-items').empty();
  
    tr = $( '<tr>' );
  
    td = $( '<td>' );
    td.text( str.phrase );
    tr.append( td );

    $('#str-items').append( tr );
  
    $('#table-str').show();
}

function displayError(){
  
    $('#input-error').show();
    //reset the input text area
    $('#inputText').val('');
    //set focus to the input text area
    $('#inputText').focus();
  
}

function displayOutputWords(){
  
  //reset the form
    resetForm();
  
    /*$('#word-items').empty();
  
    tr = $( '<tr>' );
  
    td = $( '<td>' );
    td.text( str.word );
    tr.append( td );

    $('#word-items').append( tr );
  
    $('#table-word').show();*/
  
}
    
function resetForm(){
  
  //reset the input text area
  $('#inputText').val('');
  //set focus to the input text area
  $('#inputText').focus();
  //hide error text
  $('#input-error').hide();
  
}


function resetPage(){
  
  $('#table-num').hide();
  $('#table-str').hide();
  $('#table-word').hide();
  
}


