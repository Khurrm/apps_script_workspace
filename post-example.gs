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




}