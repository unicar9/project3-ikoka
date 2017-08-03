// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// ==========================allow users to crop and resize images before uploading to cloudinary===============
var myCroppie;

$(document).ready(function() {


$(document).on('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
});

$(document).on('dragleave', function (e) {
    e.stopPropagation();
    e.preventDefault();
});

var $upload;

$(document).on('drop', function (e) {
  $('#uploader').removeClass('placeholder');
  $('#tip').hide();
  $('#croppie').empty();
  e.stopPropagation();
  e.preventDefault();

  // getting the file
  var file = e.originalEvent.dataTransfer.files[0];
  if (file) {
    var reader = new FileReader();
    // while reading the file creating new croppie instance
    reader.onload = function(e) {

      myCroppie = new Croppie(
        document.getElementById('croppie'),
        {
           viewport: { width: 150, height: 150 },
           boundary: { width: 400, height: 300 },
        });
      myCroppie.bind({
        url: e.target.result
      });
    };

    reader.readAsDataURL(file);
    $upload = $('<a>').text('Preview').attr('id','upload-btn').addClass('ui purple small button').prependTo('#croppie');
    // creating button element

  } // end of if
});

// click upload button to get the result, preview the result and
// assign the value to the hidden form field for cloudinary upload
$(document).on('click', '#upload-btn', function() {
  myCroppie.result({
    type: 'base64',
    size: 'viewport'
  }).then(function(base64){
    console.log(myCroppie.result('base64'));
    $('#result').attr('src', base64);
    // showing the preview

    $('#image').val(base64);

  });

});



}); // end of ready
