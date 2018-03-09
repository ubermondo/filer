// local javascript file - DO NOT CHANGE MAIN.MIN.JS. Instead, make changes here in main.js and compress into main.min.js.

var getFileInfo = function(fileName) {
  var fileUrl = "./demo/test.json"; //'http://localhost:8080/file/'+fileName in the actual server instance
  $.getJSON(fileUrl)
    .done(function(data) {
      console.log("Upload successful:");
      console.log(data);
      showFileInfo(data);
    })
    .fail(function(jqXHR, textStatus, error) {
      console.log("Upload failed - "+textStatus+", "+error+":");
      console.log(jqXHR);
    });
}

var showFileInfo = function(fileInfo) {
  if (fileInfo.hasOwnProperty("filename") && fileInfo.hasOwnProperty("total") && fileInfo.hasOwnProperty("words")) {
    if (!$("#fileInfo").length) {
      $("#tableHolder").html('<table id="fileInfo" class="table table-sm table-striped"><thead><tr></tr></thead><tbody></tbody></table>');
      $.each(["filename", "total", "words"], function(key, value) {
        $("#fileInfo thead tr").append('<th scope="col">'+value+'</th>');
      });
    }
    $("#fileInfo tbody").append('<tr><td>'+fileInfo.filename+'</td><td>'+fileInfo.total+'</td><td class="fileWords"></td></tr>');
    var fileWords = [];
    $.each(fileInfo.words, function(key, value) {
      fileWords.push('"'+key+'" : '+value);
    });
    $("td.fileWords:last").html(fileWords.join(', '));
  }
}

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
      dataType : 'json',
      jsonp : false,
      mimeType: 'multipart/form-data',
      xhrFields : {
        withCredentials : true
      }
    }).done(function(data) {
      console.log("Upload successful:");
      console.log(data);
      showFileInfo(data);
    })
    .fail(function(jqXHR, textStatus, error) {
      console.log("Upload failed - "+textStatus+", "+error+":");
      console.log(jqXHR);
    });
    e.preventDefault();
  });

});
