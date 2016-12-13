Socket Time

Node.js

Provide a free web socket & API for getting a server's current time 

To see how to setup firebase on your iOS, Android, or web 
https://firebase.google.com/docs/

Bind your client to https://sockettime.firebaseio.com/ and you will get 

```javascript
{
  "iso8601": "2016-12-13T08:06:43.656Z",
  "unix_millisecond": "1481616403656",
  "unix_second": "1481616403",
  "utc": "2016-12-13T08:06:43+00:00"
}
```

Bind to https://sockettime.firebaseio.com/iso8601 and you will get 
{
    "2016-12-13T08:09:28.266Z
}

Or you can make a GET request to

curl https://sockettime.firebaseio.com/.json

curl https://sockettime.firebaseio.com/iso8601.json


utc and unix_second are to seconds

iso8601 and unix_millisecond are to milliseconds

However firebase is only updated every second
