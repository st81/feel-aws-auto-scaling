const extractAbTakenTime = require('../extractAbTakenTime')

test('Extract taken time of AB when "0 < execution time < 10" seconds', () => {
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
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(1.712)
})

test('Extract taken time of AB when "10 <= execution time < 100" seconds', () => {
  const abResults = `
    This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking ec2co-ecsel-shuqf5jm7ycl-1032169985.ap-northeast-1.elb.amazonaws.com (be patient)


    Server Software:        
    Server Hostname:        localhost
    Server Port:            4000

    Document Path:          /
    Document Length:        29 bytes

    Concurrency Level:      1000
    Time taken for tests:   11.333 seconds
    Complete requests:      10000
    Failed requests:        41
      (Connect: 0, Receive: 0, Length: 41, Exceptions: 0)
    Non-2xx responses:      41
    Total transferred:      2291763 bytes
    HTML transferred:       293813 bytes
    Requests per second:    882.40 [#/sec] (mean)
    Time per request:       1133.275 [ms] (mean)
    Time per request:       1.133 [ms] (mean, across all concurrent requests)
    Transfer rate:          197.49 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        2    6  11.8      3      57
    Processing:    23 1076 1062.2    808    6777
    Waiting:       23 1076 1062.2    808    6777
    Total:         80 1083 1067.7    811    6820

    Percentage of the requests served within a certain time (ms)
      50%    811
      66%    902
      75%    996
      80%   1089
      90%   1685
      95%   2810
      98%   5887
      99%   6693
     100%   6820 (longest request)
    `
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(11.333)
})

test('Extract taken time of AB when "100 <= execution time < 1000" seconds', () => {
  const abResults = `
    This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking ec2co-ecsel-shuqf5jm7ycl-1032169985.ap-northeast-1.elb.amazonaws.com (be patient)


    Server Software:        
    Server Hostname:        localhost
    Server Port:            4000

    Document Path:          /
    Document Length:        29 bytes

    Concurrency Level:      1000
    Time taken for tests:   222.222 seconds
    Complete requests:      10000
    Failed requests:        41
      (Connect: 0, Receive: 0, Length: 41, Exceptions: 0)
    Non-2xx responses:      41
    Total transferred:      2291763 bytes
    HTML transferred:       293813 bytes
    Requests per second:    882.40 [#/sec] (mean)
    Time per request:       1133.275 [ms] (mean)
    Time per request:       1.133 [ms] (mean, across all concurrent requests)
    Transfer rate:          197.49 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        2    6  11.8      3      57
    Processing:    23 1076 1062.2    808    6777
    Waiting:       23 1076 1062.2    808    6777
    Total:         80 1083 1067.7    811    6820

    Percentage of the requests served within a certain time (ms)
      50%    811
      66%    902
      75%    996
      80%   1089
      90%   1685
      95%   2810
      98%   5887
      99%   6693
     100%   6820 (longest request)
    `
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(222.222)
})

test('Extract taken time of AB when "1000 <= execution time < 10000" seconds', () => {
  const abResults = `
    This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking ec2co-ecsel-shuqf5jm7ycl-1032169985.ap-northeast-1.elb.amazonaws.com (be patient)


    Server Software:        
    Server Hostname:        localhost
    Server Port:            4000

    Document Path:          /
    Document Length:        29 bytes

    Concurrency Level:      1000
    Time taken for tests:   5212.212 seconds
    Complete requests:      10000
    Failed requests:        41
      (Connect: 0, Receive: 0, Length: 41, Exceptions: 0)
    Non-2xx responses:      41
    Total transferred:      2291763 bytes
    HTML transferred:       293813 bytes
    Requests per second:    882.40 [#/sec] (mean)
    Time per request:       1133.275 [ms] (mean)
    Time per request:       1.133 [ms] (mean, across all concurrent requests)
    Transfer rate:          197.49 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        2    6  11.8      3      57
    Processing:    23 1076 1062.2    808    6777
    Waiting:       23 1076 1062.2    808    6777
    Total:         80 1083 1067.7    811    6820

    Percentage of the requests served within a certain time (ms)
      50%    811
      66%    902
      75%    996
      80%   1089
      90%   1685
      95%   2810
      98%   5887
      99%   6693
     100%   6820 (longest request)
    `
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(5212.212)
})

test('Extract taken time of AB when "10000 <= execution time < 100000" seconds', () => {
  const abResults = `
    This is ApacheBench, Version 2.3 <$Revision: 1757674 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking ec2co-ecsel-shuqf5jm7ycl-1032169985.ap-northeast-1.elb.amazonaws.com (be patient)


    Server Software:        
    Server Hostname:        localhost
    Server Port:            4000

    Document Path:          /
    Document Length:        29 bytes

    Concurrency Level:      1000
    Time taken for tests:   52123.212 seconds
    Complete requests:      10000
    Failed requests:        41
      (Connect: 0, Receive: 0, Length: 41, Exceptions: 0)
    Non-2xx responses:      41
    Total transferred:      2291763 bytes
    HTML transferred:       293813 bytes
    Requests per second:    882.40 [#/sec] (mean)
    Time per request:       1133.275 [ms] (mean)
    Time per request:       1.133 [ms] (mean, across all concurrent requests)
    Transfer rate:          197.49 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        2    6  11.8      3      57
    Processing:    23 1076 1062.2    808    6777
    Waiting:       23 1076 1062.2    808    6777
    Total:         80 1083 1067.7    811    6820

    Percentage of the requests served within a certain time (ms)
      50%    811
      66%    902
      75%    996
      80%   1089
      90%   1685
      95%   2810
      98%   5887
      99%   6693
     100%   6820 (longest request)
    `
  const takenTime = extractAbTakenTime(abResults)
  expect(takenTime).toBe(52123.212)
})
