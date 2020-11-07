const extractAbTakenTime = require('../extractAbTakenTime')

const abResults = `
This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking ec2co-ecsel-shuqf5jm7ycl-1032169985.ap-northeast-1.elb.amazonaws.com (be patient).....done


Server Software:        
Server Hostname:        localhost
Server Port:            4000

Document Path:          /
Document Length:        29 bytes

Concurrency Level:      1
Time taken for tests:   1.712 seconds
Complete requests:      10
Failed requests:        0
Total transferred:      2290 bytes
HTML transferred:       290 bytes
Requests per second:    5.84 [#/sec] (mean)
Time per request:       171.229 [ms] (mean)
Time per request:       171.229 [ms] (mean, across all concurrent requests)
Transfer rate:          1.31 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       13   17   3.1     18      22
Processing:    97  154  69.4    145     326
Waiting:       97  154  69.4    144     326
Total:        112  171  69.5    162     345

Percentage of the requests served within a certain time (ms)
  50%    162
  66%    176
  75%    176
  80%    218
  90%    345
  95%    345
  98%    345
  99%    345
 100%    345 (longest request)
`

test('Extract taken time of AB from resulting strings', () => {
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(1.712)
})
