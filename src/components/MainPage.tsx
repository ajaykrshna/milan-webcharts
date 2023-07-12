import ChartOvr from "./ChartOvr"
import data from '../components/scores'
import ChartDisplay from './ChartDisplay'
import { useState, useEffect } from "react"
import Working from "./Working"

export default function MainPage() {
    const [page, setPage] = useState(0)
    const [mainPage, setMainPage] = useState(0)
    const [pageto, setPageTo] = useState(<></>)
    const [mainPageTo, setMainPageTo] = useState(<></>)
    useEffect(() => {
        if (page === 0) {
            setPageTo(<ChartDisplay dataItem='SPORTS_BOYS' />)
        }
        else if (page === 1) {
            setPageTo(<ChartDisplay dataItem='SPORTS_GIRLS' />)
        }
        else if (page === 2) {
            setPageTo(<Working/>)
        }
        else {
            setPageTo(<Working/>)
        }
    }, [page])
    useEffect(() => {
        if (mainPage === 0) {
            setMainPageTo(<ChartOvr dataVal={data.LEADERBOARD.TOTAL} />)
        }
        else {
            setMainPageTo(<Working />)
        }
    }, [mainPage])
    return (
        <div className="mainpage">
            <h1>Milan Scores Page Template</h1>
            <h2>Overall Scores</h2>
            <div className="sub--options">
                <p onClick={() => setMainPage(0)} className={(mainPage === 0) ? 'active' : "notactive"}>Overall</p>
                <p onClick={() => setMainPage(1)} className={(mainPage === 1) ? 'active' : "notactive"}>Sports Boys</p>
                <p onClick={() => setMainPage(2)} className={(mainPage === 2) ? 'active' : "notactive"}>Sports Girls</p>
                <p onClick={() => setMainPage(3)} className={(mainPage === 3) ? 'active' : "notactive"}>Culti</p>
                <p onClick={() => setMainPage(4)} className={(mainPage === 4) ? 'active' : "notactive"}>Techy</p>
            </div>
            <div className="mainpage--options">
                <div>
                    <input type="radio" id="ovrgraph" />
                    <label htmlFor="ovrgraph">Graph</label>
                </div>
                <div>
                    <input type="radio" id="ovrtable" />
                    <label htmlFor="ovrtable">Table</label>
                </div>
            </div>
            <div className="mainpage--graph">
                {mainPageTo}
            </div>
            <div className="mainpage--sub">
                <h3>Categories</h3>
                <div className="sub--options">
                    <p onClick={() => setPage(0)} className={(page === 0) ? 'active' : "notactive"}>Sports Boys</p>
                    <p onClick={() => setPage(1)} className={(page === 1) ? 'active' : "notactive"}>Sports Girls</p>
                    <p onClick={() => setPage(2)} className={(page === 2) ? 'active' : "notactive"}>Culti</p>
                    <p onClick={() => setPage(3)} className={(page === 3) ? 'active' : "notactive"}>Techy</p>
                </div>
                {pageto}
            </div>
        </div>
    )
}

