const process = require("process")
const notifier = require('node-notifier')
const { exec } = require("child_process");
console.log(process)
console.log(exec)
const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const TEN_MINUTE = 10 * ONE_MINUTE
var VS = 0
function checkvs() {
    exec("tasklist", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        //console.log(`stdout: ${stdout}`);

        if (stdout.indexOf("devenv.exe") > 0) {
            //console.log("VS is running.")
            VS = 1
        } else if (stdout.indexOf("devenv.exe") < 0 && VS == 1) {
            VS = 0
            //console.log("VS has stopped running.")
            //console.log("Saving projects...")
            //git save
            setTimeout(() => { console.log("Projects saved!") }, ONE_SECOND)
        } else if (stdout.indexOf("devenv.exe") < 0) {
            //console.log("VS is not running.")
            VS = 0
        } 
    });
}


setInterval(checkvs, ONE_SECOND)























/*

const NotificationCenter = require('node-notifier').NotificationCenter;

var notifier = new NotificationCenter({
  withFallback: false, // Use Growl Fallback if <= 10.8
  customPath: undefined // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
});

notifier.notify(
  {
    title: undefined,
    subtitle: undefined,
    message: undefined,
    sound: false, // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
    icon: 'Terminal Icon', // Absolute Path to Triggering Icon
    contentImage: undefined, // Absolute Path to Attached Image (Content Image)
    open: undefined, // URL to open on Click
    wait: false, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

    // New in latest version. See `example/macInput.js` for usage
    timeout: 5, // Takes precedence over wait if both are defined.
    closeLabel: undefined, // String. Label for cancel button
    actions: undefined, // String | Array<String>. Action label or list of labels in case of dropdown
    dropdownLabel: undefined, // String. Label to be used if multiple actions
    reply: false // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
  },
  function (error, response, metadata) {
    console.log(response, metadata);
  }
);


 */

//process.on("beforeExit", (stream) => {
    
//})
