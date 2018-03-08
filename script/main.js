// local javascript file - DO NOT CHANGE MAIN.MIN.JS. Instead, make changes here in main.js and compress into main.min.js.


$(function() {

  $("#fileUpload").submit(function(e) {
    var formData;
    formData = new FormData();
    formData.append("file", $("#fileSelector")[0].files[0]);
    $.ajax({
      url : 'http://localhost:8080/file/', //assumes that RMS is running on localhost:8080; adjust this accordingly.
      data : formData,
      processData : false,
      type : 'PUT',
      contentType : 'multipart/form-data',
      mimeType: 'multipart/form-data',
      success: function(data) {
        console.log(data);
      }
    });
    e.preventDefault();
  });

});
