import { useState, useEffect } from 'react'
import Chart from './Chart'
import data from './scores'

export default function ChartDisplay(props) {
    const [item, setItem] = useState(Object.keys(data[props.dataItem])[0])

    const options = [];
    for (const item in data[props.dataItem]) {
        options.push(<option value={item}>{item}</option>)
    }
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
                <div>
                    <input type="radio" id="subgraph" />
                    <label htmlFor="subgraph">Graph</label>
                </div>
                <div>
                    <input type="radio" id="subtable" />
                    <label htmlFor="subtable">Table</label>
                </div>
            </div>
            <div className="sub--graph">
                <Chart dataVal={data[props.dataItem][item]} head={item} />
            </div>
        </>
    )
}