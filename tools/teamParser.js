// https://docs.google.com/spreadsheets/d/1reTkwA5Od20EpDTi1zhGaTrQxdhheKIv_2ELmFzh1_E/edit#gid=2134935584


const fs = require('fs');
const csv = require('csvtojson')
const filePath = './v2.csv';
let csvContent = fs.readFileSync(filePath).toString().split('\n'); // read file and convert to array by line break 
csvContent = "date,action,title,subtitle,introTitle,description,logo,link,videoLink,SDGsIds\n" + csvContent.join('\n'); // convert array back to string

csv()
    .fromString(csvContent)
    .then(x =>
        x.map(
            y => ({
                ...y,
                img: y.link.replace('https://si.taiwan.gov.tw/Home/Org?Fid=', '').replace('https://reurl.cc/', ''),
                videoLink: y.videoLink === "" || y.videoLink === "無" ? null : y.videoLink,
                SDGsIds: y.SDGsIds == '無' ? [] : y.SDGsIds.split('、').map(x => x.trim()).map(x => x.length < 2 ? `0${x}` : x),
            })
        )
    )
    .then(x => {
        console.log(JSON.stringify(x, null, 2));
        //fs.writeFileSync('../src/assets/teams/teams.json', JSON.stringify(x, null, 2))
    })