//to use: open node console> enter 'node resize img/logo.png', where 'logo.png' can be replaced by another image file name

const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const filePath = process.argv[2];

const dirName = path.dirname(filePath);
const [fileName, extension] = path.basename(filePath).split('.');

const destination = `${dirName}/redimensionado`;

//Checks if destination directory already exists, if it doesn't, it will create one.
if (!fs.existsSync(destination)){
    fs.mkdirSync(destination);
}

const sizes = [128, 48, 32, 24, 16];

sizes.forEach(size=>{
sharp(filePath)
.clone()
.resize({width:size})
.toFile(`${destination}/${fileName}-${size}.${extension}`)
.then(info=>{
    console.log(info)
}).catch(error=>{
    console.log(error)
})
});