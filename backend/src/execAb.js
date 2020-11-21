const { exec } = require("child_process")

const execAb = ({requests, concurrency, serverUrl}) => {
  return new Promise((resolve, reject) => {
    if (requests <= 0) {
      return reject('requests must greater than 0')
    }
    if (concurrency <= 0) {
      return reject('concurrency must greater than 0')
    }

    exec(`ab -r -n ${requests} -c ${concurrency} ${serverUrl}`, (err, stdout, stderr) => {
      if (err) {
        console.log(`error: ${err}`);
        reject(err)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      resolve(stdout)
    })
  })
}

module.exports = execAb
