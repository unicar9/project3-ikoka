// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  // cloudinary.applyUploadWidget(document.getElementById('upload_widget_opener'),
  //     { cloud_name: 'CLOUD_NAME', upload_preset: 'PRESET', field_name: 'post[image]', multiple: false },
  //       function(error, result) {console.log(error, result)});
  // $('#upload_widget_opener').cloudinary_upload_widget(
  //   { cloud_name: 'CLOUD_NAME', upload_preset: 'PRESET',
  //     cropping: 'server', folder: 'user_photos' },
  //   function(error, result) { console.log(error, result) });

    $uploadCrop = $('#upload_widget_opener').croppie({
      enableExif: true,
      viewport: {
          width: 200,
          height: 200,
          type: 'circle'
      },
      boundary: {
          width: 300,
          height: 300
      }
    });

}); // end of ready
