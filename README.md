Socket Time

Node.js

The goal of this project is to provide the easiest way to bind a client project to the current server time through a web socket or API request

curl https://sockettime.firebaseio.com/.json

response:
{
  "iso8601": "2016-12-13T08:06:43.656Z",
  "unix_millisecond": "1481616403656",
  "unix_second": "1481616403",
  "utc": "2016-12-13T08:06:43+00:00"
}

utc and unix_second are to seconds

iso8601 and unix_millisecond are to milliseconds

However firebase is only updated every second


curl https://sockettime.firebaseio.com/iso8601.json

response:
{
    "2016-12-13T08:09:28.266Z
}