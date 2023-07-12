import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis
} from 'recharts';
import score from './scores'

const SPORTS_BOYS = score.SPORTS_BOYS
const Cricket = SPORTS_BOYS[0]
console.log(SPORTS_BOYS.length)

/* const dataArray = [];
    for (const [key, value] of Object.entries(Cricket)) {
        if (key === 'Column1') { continue; }
        if (key === '1st') { break; }
        dataArray.push({
            hostel: key,
            score: value
        })
    } */

export default function Chart() {

    /* const SPORTS_BOYS = score.SPORTS_BOYS
    const SPORTS_GIRLS = score.SPORTS_GIRLS
    const TECHY = score.TECHY
    const CULTY = score.CULTY
    console.log(SPORTS_BOYS) */

    const dataArray = [];
    for (const [sportName, data] of Object.entries(SPORTS_BOYS)){
        for (const [key, value] of Object.entries(data)) {
            if (key === 'Column1') { continue; }
            if (key === '1st') { break; }
            dataArray.push({
                hostel: key,
                score: value
            })
        }
    }
    console.log(dataArray)
    const CustomizedLabel = ({ x, y, value }) => {
        return (
            <text x={x + value * 3 / 2} y={y + 18} fill='#fff' fontSize='0.8rem' textAnchor="start">{value}</text>
        );
    }
    return (
        <div className='chart'>
            <h2>Cricket</h2><br />
            <BarChart width={500} height={300} data={dataArray} layout='vertical' margin={{ right: 20, bottom: 20, left: 50 }}>
                <Bar dataKey="score" fill="#444" label={<CustomizedLabel />} />
                <XAxis dataKey="score" type='number' fontSize='1rem' hide='true' />
                <YAxis dataKey='hostel' type='category' fontSize='0.8rem' stroke='#fff' fontWeight='600' axisLine={false} tickLine={false} />
            </BarChart>
        </div>
    )
}