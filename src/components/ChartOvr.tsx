import {
    BarChart, Bar, XAxis, YAxis
} from 'recharts';


export default function ChartOvr(props) {

    const CustomizedLabel = ({ x, y, value }) => {
        const value2 = value/3 
        return (
            <text x={x + value2 * 3 / 2} y={y + 20} fill='#fff' fontSize='0.8rem' fontWeight='600' textAnchor="start">{value}</text>
        );
    }    

    return (
        <div className='chartovr'>
            <BarChart
                width={1000}
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