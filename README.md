# pushetta-npm

Simple node module for interact with Pushetta API.
Pushetta is a cloud API to send push notifications to smartphones and web browsers, look at the site for more informations http://www.pushetta.com

## Sample use

API Key can be obtained registering on Pushetta website.


```javascript
var Pushetta=require("../pushetta");
pushetta = new Pushetta("{API_KEY}");
pushetta.pushMessage("{CHANNEL NAME}", "Hello World");
```


