// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var inputHeight, inputWidth;

  inputHeight=$('#input_height').val();
  inputWidth=$('#input_width').val();
  $('#pixel_canvas').empty();
  for(var i=0;i<inputWidth;i++){
    $('#pixel_canvas').append('<tr id="row'+i+'"></tr>');
    for(var j=0;j<inputWidth;j++){
      $('#row'+i).append('<td id="row'+i+'cell'+j+'">&nbsp;</td>');
    }
  }
}

$('#input_submit').click(makeGrid);

$('#pixel_canvas').on('click','td',function(evt){
  $(evt.target).css("background-color",$("#colorPicker").val());
});
