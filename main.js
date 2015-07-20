console.log("works");

turns = 0;
var b = $('.tiles');

// [123], [456], [789] row 1 2 3
// [147], [258], [369] coumns 1 2 3
// [159] diagonal left to right  [357] diagonal right to left
$(b).find('td').on('click', function(){
            if (turns % 2 === 0){
              $(this).text('x');
              $(this).css('color', 'firebrick');
              wins('X');
      }

             else {
              $(this).text('o');
              $(this).css('color', 'midnightblue');
              wins('O');
            }
      
          turns++;
          
      });

function wins(player){
  // row I
  if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#2').text() && 
    $(b).find('#1').text() == $('#3').text()){
        // alert('game over! you win!')
        $('.input').text(player  + ' Wins!');
        }
  // row II
  else if($(b).find('#4').text() !== '' && $(b).find('#4').text() == $(b).find('#5').text() && 
    $(b).find('#4').text() == $('#6').text() ){
        $('.input').text(player  + ' Wins!');
        }
  // row III
  else if($(b).find('#7').text() !== '' && $(b).find('#7').text() == $(b).find('#8').text() && 
    $(b).find('#7').text() == $('#9').text()){
        $('.input').text(player  + ' Wins!');
        }


  // column I
  else if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#4').text() && 
    $(b).find('#1').text() == $('#7').text()){
        $('.input').text(player  + ' Wins!');
        }
  // column II
  else if($(b).find('#2').text() !== '' && $(b).find('#2').text() == $(b).find('#5').text() && 
    $(b).find('#2').text() == $('#8').text() ){
        $('.input').text(player  + ' Wins!');
        }
  // column III
  else if($(b).find('#3').text() !== '' && $(b).find('#3').text() == $(b).find('#6').text() && 
    $(b).find('#3').text() == $('#9').text()){
        $('.input').text(player  + ' Wins!');
        }

  // diagonal <----- to ------>
   else if($(b).find('#1').text() !== '' && $(b).find('#1').text() == $(b).find('#5').text() && 
    $(b).find('#1').text() == $('#9').text()){
        $('.input').text(player  + ' Wins!');
        }
  // diagonal ------> to <-------
  else if($(b).find('#3').text() !== '' && $(b).find('#3').text() == $(b).find('#5').text() && 
    $(b).find('#3').text() == $('#7').text() ){
        $('.input').text(player  + ' Wins!');
        }
      };

$('#restart').on('click', function(){
    $('td').text('');
    $('.input').text('');
 });

$('td').click(function() {
    $(this).addClass("floating");
  });













