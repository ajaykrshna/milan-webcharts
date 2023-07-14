import { useState, useEffect } from 'react'
import Chart from './Chart'
import data from './scores'
import { LiveScoresComponent } from './LiveScoresComponent';

export default function ChartDisplay(props) {
    const [item, setItem] = useState(Object.keys(data[props.dataItem])[0])

    const options = [];
    for (const item in data[props.dataItem]) {
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
                {graphTable ? <Chart dataVal={data[props.dataItem][item]} head={item} /> 
                : <LiveScoresComponent/> }
            </div>
        </>
    )
}