// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
var myCroppie;

$(document).ready(function() {
  // cloudinary.applyUploadWidget(document.getElementById('upload_widget_opener'),
  //     { cloud_name: 'CLOUD_NAME', upload_preset: 'PRESET', field_name: 'post[image]', multiple: false },
  //       function(error, result) {console.log(error, result)});
  // $('#upload_widget_opener').cloudinary_upload_widget(
  //   { cloud_name: 'CLOUD_NAME', upload_preset: 'PRESET',
  //     cropping: 'server', folder: 'user_photos' },
  //   function(error, result) { console.log(error, result) });

    // $uploadCrop = $('#upload_widget_opener').croppie({
    //   enableExif: true,
    //   viewport: {
    //       width: 200,
    //       height: 200,
    //       type: 'circle'
    //   },
    //   boundary: {
    //       width: 300,
    //       height: 300
    //   }
    // });

//     $(document).on('dragover', function (e) {
//       console.log('over');
//         e.stopPropagation();
//         e.preventDefault();
//     });
//
//     $(document).on('dragleave', function (e) {
//         console.log('leave');
//         e.stopPropagation();
//         e.preventDefault();
//     });
//
//     $(document).on('drop', function (e) {
//       e.stopPropagation();
//       e.preventDefault();
//
//       var file = e.originalEvent.dataTransfer.files[0];
//       console.log(file);
//
//       if( file ){
//         reader = new FileReader();
//         reader.onload = function(e) {
//           //CROPPIE
//           $myCroppie = $('#croppie').croppie({
//                     			viewport: {
//                     				width: 100,
//                     				height: 100,
//                     				type: 'circle'
//                     			},
//                     			enableExif: true
//                     		});
//
//
//             myCroppie.bind({
//               url: e.target.result,
//             });
//
//         };
//         reader.readAsDataURL(file);
//         console.log('here');
//       }
//     });
//
// });

// var $imageLoader = $('#filePhoto');
//     $imageLoader.on('change', handleImage, false);
//
// function handleImage(e) {
//     var reader = new FileReader();
//     reader.onload = function (event) {
//         $('#uploader img').attr('src',event.target.result);
//     }
//     reader.readAsDataURL(e.target.files[0]);
//
// }
//
// var $dropbox;
// $dropbox = $("#uploader");
// $dropbox.on("dragenter", dragenter, false);
// $dropbox.on("dragover", dragover, false);
// $dropbox.on("drop", drop, false);
//
// function dragenter(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function dragover(e) {
//   e.stopPropagation();
//   e.preventDefault();
// }
//
// function drop(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   //you can check e's properties
//   //console.log(e);
//   var dt = e.dataTransfer;
//   var files = dt.files;
//
//   //this code line fires your 'handleImage' function (imageLoader change event)
//   $imageLoader.files = files;
// }

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
  e.stopPropagation();
  e.preventDefault();

  var file = e.originalEvent.dataTransfer.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {

      myCroppie = new Croppie(
        document.getElementById('uploader'),
        {
           viewport: { width: 150, height: 150 },
           boundary: { width: 400, height: 300 },
        });
      myCroppie.bind({
        url: e.target.result
      });
    };

    reader.readAsDataURL(file);
    $upload = $('<a>').text('Upload').attr('id','upload-btn').addClass('ui small button').prependTo('#uploader');

  } // end of if
});

$(document).on('click', '#upload-btn', function() {
  myCroppie.result({
    type: 'base64',
    size: 'viewport'
  }).then(function(base64){
    console.log(myCroppie.result('base64'));
    $('#result').attr('src', base64);

    $('#image').val(base64);

    // var fd = new FormData($('#new_user'));
    // fd.append('file', base64);
    // debugger;
    //
  });

});



}); // end of ready
