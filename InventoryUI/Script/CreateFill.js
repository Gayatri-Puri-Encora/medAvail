  var createPatient = require("CreatePatient");
  var aqHttpRequest;
  var responseBody;
  var aqHttpResponse;
  var requestBody;
  var requestUrl;
  var jsonResponseBody;
  var patientId = Project.Variables.patientID;
  var rxId = Project.Variables.rxId;
 
  //Create rx fill.
  function createFill(){
  
  //Request url for create fill.
  requestUrl= Project.Variables.rxBaseUrl +rxId+ "/fills";
  
  //Request body for create fill.
  requestBody ='{"DaysSupply":30,"FilledOn":"2022-01-18T11:25:32.602Z","DiscardAfter":"2022-07-18T11:25:32.602Z","StoreId":"7354983","FillId":"98","FillStatus":"ReadyToDispense","IsCounselingRequired":false,"IsCustomerIdRequired":false,"PayAmount":17.35,"DeliveryMethod":"Kiosk","Product":{"BrandName":"Januvia","GenericName":"Januvia","IsProductBrand":true,"LabelName":"Januvia","Ndc":"0006-0112-31","Manufacturer":"manufacturer"},"FillingPharmacy":{"Name":"Filling Pharmacy","Phone":"555 123-4567","StoreId":"41V400023","Address":{"street":"127 Green Apple Road","city":"Sacramento","state":"California","country":"US","postalCode":"00812"}},"AuditInitials":{"ClinicalReviewPharmacist":"BTM","AuthorizingPharmacist":"BTM"}}'
  Log.Message("createFill request body for create fill: "+requestBody);
  
  //Create the aqHttpRequest object
   aqHttpRequest = aqHttp.CreateRequest("POST", requestUrl);
  
  //Specify the Content-Type header value
  aqHttpRequest.SetHeader("Content-Type", "application/json");
 
  // Send the request, create the aqHttpResponse object
  responseBody = aqHttpRequest.Send(requestBody);
  Log.Message("createFill status code:"+responseBody.StatusCode);
  createPatient.verifyStatusCode(responseBody, 200);  
 }

//Get fill
  function getFill(){
    //Create request object
   aqHttpRequest = aqHttp.CreateGetRequest(requestUrl);
   
   //Send the request, get an aqHttpResponse object
   responseBody = aqHttpRequest.Send();
   Log.Message("getFill response is: "+responseBody);
   Log.Message("getFill status code:"+responseBody.StatusCode);
   //Verify status code.
   createPatient.verifyStatusCode(responseBody, 200);
  }
  
 
  