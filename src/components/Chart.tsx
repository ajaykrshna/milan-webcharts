import {
    BarChart, Bar, XAxis, YAxis
} from 'recharts';



export default function Chart(props) {

    const CustomizedLabel = ({ x, y, value }) => {
        return (
            <text x={x + value * 3 / 2} y={y + 18} fill='#fff' fontSize='0.8rem' textAnchor="start">{value}</text>
        );
    }

    return (
        <div className='chart'>
            <h2>{props.head}</h2><br />
            <BarChart
                width={500}
                height={500}
                data={props.dataVal}
                layout='vertical'
                margin={{ right: 20, bottom: 20, left: 50 }}
            >
                <Bar
                    dataKey="score"
                    fill="#444"
                    label={<CustomizedLabel />}
                />

                <XAxis
                    dataKey="score"
                    type='number'
                    fontSize='1rem'
                    hide={true} />

                <YAxis
                    dataKey='hostel'
                    type='category'
                    fontSize='0.8rem'
                    stroke='#fff'
                    fontWeight='600'
                    axisLine={false}
                    tickLine={false}
                />
            </BarChart>
        </div>
    )
}