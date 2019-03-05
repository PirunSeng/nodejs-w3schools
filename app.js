var http = require('http');
var fs = require('fs');
var url = require('url');
var uc = require('upper-case');
var formidable = require('formidable');
var nodemailer = require('nodemailer');

// read file

// http.createServer(function (req, res) {
//   fs.readFile('intro.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);


// write file

// fs.appendFile('aaaa', '', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// create file
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Created!');
// });

// write file override

// fs.writeFile('mynewfile3.txt', 'Hi idol', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// update/append file

// var fs = require('fs');
//
// fs.appendFile('mynewfile3.txt', ' Bart hi fan!', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// replace file and Content

// var fs = require('fs');
//
// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// delete file

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// rename file
// fs.rename('mynewfile1', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// url module

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);
//
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
//
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// file server

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// npm

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc("Hello World!"));
//   res.end();
// }).listen(8080);

// events

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
//
// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }
//
// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
//
// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// upload files

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var uploads = '/home/pirun/Documents/my_projects/nodejs-w3schools/uploads/'
//       var newpath = uploads + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// send email

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail',
    pass: 'mypassword'
  }
});

var mailOptions = {
  from: 'myemail',
  to: 'email1, email2',
  subject: 'Sending Email using Node.js',
  text: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
