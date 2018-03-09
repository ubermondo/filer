// local javascript file - DO NOT CHANGE MAIN.MIN.JS. Instead, make changes here in main.js and compress into main.min.js.


$(function() {

  $("#fileUpload").submit(function(e) {
    var formData;
    formData = new FormData();
    formData.append("file", $("#fileSelector")[0].files[0]);
    var fileName = $("#fileSelector")[0].value.split("\\").pop();
    $.ajax({
      //url : 'http://localhost:8080/file/'+fileName+'/', //assumes that RMS is running on localhost:8080; adjust this accordingly.
      url : './demo/test.json', //this is the URL of the simulated response
      data : formData,
      processData : false,
      type : 'GET', //type : 'PUT', //switch GET for PUT when interacting with the actual server
      contentType : 'multipart/form-data',
      mimeType: 'multipart/form-data',
      xhrFields : {
        withCredentials : true
      },
      success: function(data) {
        console.log(data);
      }
    });
    e.preventDefault();
  });

});
