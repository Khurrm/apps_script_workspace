function postFunction() {
  
var USERNAME = 'corp\XXXXXXX';
var PASSWORD = 'XXXXXXXXX';
var TENANTCODE = 'XXXXXXXXXXXX';
var url = "https://XXXXX.awmdm.com/API/mdm/devices/model-details";
var uuid ="XXXXXXXXXXX";

var authHeader = "Basic " + Utilities.base64Encode(USERNAME + ':' + PASSWORD);
var authy = "Basic " + authHeader;
Logger.log(authy);
  
var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic "+  authHeader,
        "aw-tenant-code": TENANTCODE 
}; 

var data = {
  "device_manufacturers": [
    "Apple"
  ],
  "page": 1,
  "page_size": 2
};

var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  "headers": headers,
  'payload' : JSON.stringify(data)
};

Logger.log(options);
var response = UrlFetchApp.fetch(url1,options);
Logger.log(response); 

var content = response.getContentText();
var json = JSON.parse(content);
Logger.log(json.total_results)


}