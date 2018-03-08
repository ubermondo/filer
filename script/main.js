// local javascript file - DO NOT CHANGE MAIN.MIN.JS. Instead, make changes here in main.js and compress into main.min.js.


$(function() {

  $(".startUpload").click(function(e) {
    var fileName = $("#fileSelector")[0].value.split("\\").pop();
    $("#fileUpload").attr("action", "http://localhost:8080/file/"+fileName+"/");
    $("#fileUpload").submit();
    e.preventDefault();
  });

  

  // $("#fileUpload").submit(function(e) {
  //   var formData;
  //   formData = new FormData();
  //   formData.append("file", $("#fileSelector")[0].files[0]);
  //   var fileName = $("#fileSelector")[0].value.split("\\").pop();
  //   $.ajax({
  //     url : 'http://localhost:8080/file/'+fileName+'/', //assumes that RMS is running on localhost:8080; adjust this accordingly.
  //     data : formData,
  //     processData : false,
  //     type : 'PUT',
  //     contentType : 'multipart/form-data',
  //     mimeType: 'multipart/form-data',
  //     xhrFields : {
  //       withCredentials : true
  //     },
  //     success: function(data) {
  //       console.log(data);
  //     }
  //   });
  //   e.preventDefault();
  // });

});
