import Chart from "./Chart"

export default function MainPage() {
    return (
        <div className="mainpage">
            <h1>Milan Scores Page Template</h1>
            <h2>Overall Scores</h2>
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
                <Chart />
            </div>
            <div className="mainpage--sub">
                <h3>Categories</h3>
                <div className="sub--options">
                    <p>Sports Boys</p>
                    <p>Sports Girls</p>
                    <p>Culti</p>
                    <p>Techy</p>
                </div>
                <form className="sub--select">
                    <label htmlFor="item">Select</label>
                    <select name="item" id="item">
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Hockey">Hockey</option>
                    </select>
                    <button>Submit</button>
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
                    <Chart />
                </div>
            </div>
        </div>
    )
}