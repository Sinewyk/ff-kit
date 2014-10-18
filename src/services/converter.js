var converter = require('ebook-converter');
var execPath = require('config').execPath;

//@todo, param execPath, search for it in config or something (or include Calibre inside this)
//@todo resolve source temp stuff which will be downloaded from the web
var convert = converter({
    execPath: execPath,
    source: 'e:/Prog/ff-kit/temp/Watch.html'
});

convert.on('exit', function(code) {
    if (code !== 0) throw new Error('failed converting');
    return console.log('OK =)');
})
