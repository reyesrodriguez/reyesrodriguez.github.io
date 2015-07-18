console.log("works");

turns = 0;
var b = $('.tiles');

// [123], [456], [789] row 1 2 3
// [147], [258], [369] coumns 1 2 3
// [159] diagonal left to right  [357] diagonal right to left
$(b).find('td').on('click', function(){
            if (turns % 2 === 0){
              $(this).text('X');
              wins('X');

            } else {
           //player 2's turn (O)
              $(this).text('O');
              wins('O');
            }
          turns++;
          
      });

function wins(player){
  // row I
  if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#2').text() && 
    $(b).find('#1').text() == $('#3').text()){
        alert('game over! ' + player + ' is the winner!');
        }
  // row II
  else if($(b).find('#4').text() !== '' && $(b).find('#4').text() == $(b).find('#5').text() && 
    $(b).find('#4').text() == $('#6').text() ){
        alert('game over! ' + player + ' is the winner!');
        }
  // row III
  else if($(b).find('#7').text() !== '' && $(b).find('#7').text() == $(b).find('#8').text() && 
    $(b).find('#7').text() == $('#9').text()){
        alert('game over! ' + player + ' is the winner!');
        }


  // column I
  else if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#4').text() && 
    $(b).find('#1').text() == $('#7').text()){
        alert('game over! ' + player + ' is the winner!');
        }
  // column II
  else if($(b).find('#2').text() !== '' && $(b).find('#2').text() == $(b).find('#5').text() && 
    $(b).find('#2').text() == $('#8').text() ){
        alert('game over! ' + player + ' is the winner!');
        }
  // column III
  else if($(b).find('#3').text() !== '' && $(b).find('#3').text() == $(b).find('#6').text() && 
    $(b).find('#3').text() == $('#9').text()){
        alert('game over! ' + player + ' is the winner!');
        }

  // diagonal <----- to ------>
   else if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#5').text() && 
    $(b).find('#1').text() == $('#9').text()){
        alert('game over! ' + player + ' is the winner!');
        }
  // diagonal ------> to <-------
  else if($(b).find('#3').text() !== '' && $(b).find('#3').text() == $(b).find('#5').text() && 
    $(b).find('#3').text() == $('#7').text() ){
        alert('game over! ' + player + ' is the winner!');
        }
      }

$('#restart').on('click', function(){
    $('.box').text('');
  })




