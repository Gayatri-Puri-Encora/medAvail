  var createPatient = require("CreatePatient");
  var aqHttpRequest;
  var responseBody;
  var aqHttpResponse;
  var requestBody;
  var requestUrl;
  var jsonResponseBody;
  var patientId = Project.Variables.patientID;
 
  //Delete patient
  function deletePatient(){
  
  //Request url for delete patient.
    requestUrl = Project.Variables.patientBaseUrl+patientId;
  
  //Create the aqHttpRequest object
   aqHttpRequest = aqHttp.CreateRequest("DELETE", requestUrl);
  
  // Send the request, create the aqHttpResponse object
  responseBody = aqHttpRequest.Send(requestBody);
  Log.Message("createFill status code:"+responseBody.StatusCode);
  
  //Verify status code
  createPatient.verifyStatusCode(responseBody, 200);  

 }


  
 
  