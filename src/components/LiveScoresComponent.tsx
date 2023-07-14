import { useEffect, useState } from 'react';
import axios from 'axios';

export const LiveScoresComponent = () => {

  const [data, setdata] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      axios.get('./output.json').then((res) => {
        setdata(res.data);
      })
    }
    FetchData();

  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  const SPORTS_BOYS_DATA = data.SPORTS_BOYS;

  const sportsItems = Object.keys(SPORTS_BOYS_DATA).map((sport, index) => (
    <div key={index} id='score-card'>
      <h2>{sport}</h2>
      {SPORTS_BOYS_DATA[sport].map((item, subIndex) => (
        <div key={subIndex}>
          <p className='box-1'>{item.score}</p>
        </div>
      ))}
    </div>
  ));

  const hostel_titles = SPORTS_BOYS_DATA.CRICKET.map((title, index) => (
    <div id='title' key={index}>
      <p>{title.hostel}</p>
    </div>
  ));

  return (
    <>
      <div id='score-cards'>
        <div id='titles'>
          <h2>HOSTELS</h2>
          {hostel_titles}
        </div>
        {sportsItems}
      </div>
    </>
  )
}
