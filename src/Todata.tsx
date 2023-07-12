import score from './scores'

const SPORTS_BOYS = score.SPORTS_BOYS
const Cricket = SPORTS_BOYS[0]
console.log(SPORTS_BOYS.length)

function Change(){
    let dataArray = [];
    for (const [key, value] of Object.entries(Cricket)) {
        if (key === 'Column1') {continue;}
        if (key === '1st') {break;}
        dataArray.push({
            hostel : key,
            score : value
        })
      }
}

export default Change;
