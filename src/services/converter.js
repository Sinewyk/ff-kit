var converter = require('ebook-converter');

//@todo, param execPath, search for it in config or something (or include Calibre inside this)
//@todo resolve source temp stuff which will be downloaded from the web
var convert = converter({
    execPath: 'e:/Programmes/FanFictionDownloader/Calibre Portable/Calibre/ebook-convert.exe',
    source: 'e:/Prog/ff-kit/temp/Watch.html'
});

convert.on('exit', function(code) {
    if (code !== 0) throw new Error('failed converting');
    return console.log('OK =)');
})
