function getFunction() {

//obfuscated values (username, password, tenantcode and url). 
var USERNAME = 'corp\XXXXXX';
var PASSWORD = 'XXXXXXXXX';
var tenantcode = 'XXXXXXXXXX';

var url = "https://XXXX.awmdm.com/API/mdm/devices/12345";
var url1 = "https://XXXXX.awmdm.com/API/mdm/devices/search?user=XXXXX";
//uuid is the ID of the Organization group
var uuid ="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var contenttype = 'application/json';

var authHeader = "Basic " + Utilities.base64Encode(USERNAME + ':' + PASSWORD);
var authy = "Basic " + authHeader;
Logger.log(authy);

var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic "+ authHeader ,
        "aw-tenant-code": tenantcode
     
}; 

var options = {"method": "Get",
                 "headers": headers
                };
                 

}