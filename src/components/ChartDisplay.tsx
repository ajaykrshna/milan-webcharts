import { useState, useEffect } from 'react'
import axios from 'axios';
import Chart from './Chart'
import { LiveScoresComponent } from './LiveScoresComponent';

const data = []

const FetchData = async () => {
    axios.get('./output.json').then((res) => {
        data.push(res.data)
    })
}
FetchData();

export default function ChartDisplay(props) {
    const [item, setItem] = useState(Object.keys(data[0][props.dataItem])[0])

    const options = [];
    for (const item in data[0][props.dataItem]) {
        options.push(<option value={item} key={item}>{item}</option>)
    }

    const [graphTable, setGraphTable] = useState(true)
    return (
        <>
            <form className="sub--select">
                <select
                    name="item"
                    id="item"
                    value={item}
                    onChange={e => setItem(e.target.value)}
                >
                    {options}
                </select>
            </form>
            <div className="mainpage--options">
                <div
                    className={graphTable ? "activeop" : "pendingop"}
                    onClick={() => setGraphTable(!graphTable)}>
                    Graph
                </div>
                <div
                    className={!graphTable ? "activeop" : "pendingop"}
                    onClick={() => setGraphTable(!graphTable)}>
                    Table
                </div>
            </div>
            <div className="sub--graph">
                {graphTable ? <Chart dataVal={data[0][props.dataItem][item]} head={item} />
                    : <LiveScoresComponent />}
            </div>
        </>
    )
}