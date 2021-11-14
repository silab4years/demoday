// https://docs.google.com/spreadsheets/d/1reTkwA5Od20EpDTi1zhGaTrQxdhheKIv_2ELmFzh1_E/edit#gid=2134935584


const fs = require('fs');
const csv = require('csvtojson')
const filePath = './teams.csv';
let csvContent = fs.readFileSync(filePath).toString().split('\n'); // read file and convert to array by line break
csvContent.shift(); // remove the the first element from array
csvContent.shift(); // remove the the first element from array
csvContent.shift(); // remove the the first element from array
csvContent = "date,title,subtitle,introTitle,description,link,videoLink,SDGsIds\n" + csvContent.join('\n'); // convert array back to string

csv()
    .fromString(csvContent)
    .then(x =>
        x.map(
            y => ({
                ...y,
                img: y.link.replace('https://si.taiwan.gov.tw/Home/Org?Fid=', ''),
                videoLink: y.videoLink === "" ? null : y.videoLink,
                SDGsIds: y.SDGsIds.split('、').map(x => x.trim()).map(x => x.length < 2 ? `0${x}` : x),
            })
        )
    )
    .then(x => {
        console.log(x);
        fs.writeFileSync('../src/assets/teams/teams.json', JSON.stringify(x, null, 2))
    })