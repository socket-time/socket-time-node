# Socket Time

Socket Time provides a free web socket & API for getting the current time through Firebase.

Instructions to setup firebase on your iOS, Android, or web clients: https://firebase.google.com/docs/

Firebase URL: https://sockettime.firebaseio.com/

Example response:

```javascript
{
  "iso8601": "2016-12-13T08:06:43.656Z",
  "unix_millisecond": "1481616403656",
  "unix_second": "1481616403",
  "utc": "2016-12-13T08:06:43+00:00"
}
```

Bind to https://sockettime.firebaseio.com/iso8601

Example response:
```javascript
{
    "2016-12-13T08:09:28.266Z
}
```

Or you can make a GET request to

```bash
curl https://sockettime.firebaseio.com/.json

curl https://sockettime.firebaseio.com/iso8601.json
```

utc and unix_second are to seconds

iso8601 and unix_millisecond are to milliseconds

However firebase is only updated every second
