import React,{useState,useEffect} from 'react'
import Axios from "axios";
import "./Graphs.css";

export const Graphs = (props) => {
    const [Title, setTitle] = useState();
    const [CHARAKA, setCHARAKA] = useState();
    const [SUSRUTA, setSUSRUTA] = useState();
    const [KAUTILYA, setKAUTILYA] = useState();
    const [VYASA, setVYASA] = useState();
    const [BRAHMAGUPTA, setBRAHMAGUPTA] = useState();
    const [VARAHAMIHIRA, setVARAHAMIHIRA] = useState();
    const [RAMANUJA, setRAMANUJA] = useState();
    const [KAPILA, setKAPILA] = useState();



    const FetchData =()=>{
        Axios.get("./scores.json").then((res)=>{
            setTitle(res.data.SPORTS_BOYS[props.sportsIndex].Column1);
            setCHARAKA(res.data.SPORTS_BOYS[props.sportsIndex].CHARAKA);
            setSUSRUTA(res.data.SPORTS_BOYS[props.sportsIndex].SUSRUTA);
            setKAUTILYA(res.data.SPORTS_BOYS[props.sportsIndex].KAUTILYA);
            setVYASA(res.data.SPORTS_BOYS[props.sportsIndex].VYASA);
            setBRAHMAGUPTA(res.data.SPORTS_BOYS[props.sportsIndex].BRAHMAGUPTA);
            setVARAHAMIHIRA(res.data.SPORTS_BOYS[props.sportsIndex].VARAHAMIHIRA);
            setRAMANUJA(res.data.SPORTS_BOYS[props.sportsIndex].RAMANUJA);
            setKAPILA(res.data.SPORTS_BOYS[props.sportsIndex].KAPILA);
        });
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
    <div>
        <div className="container">
        <h3 className='title'>{Title}</h3>
        <div id='Graph' className=''>
            <div className='hostel-title'>CHARAKA</div><div className='hostel-score'> {CHARAKA}</div>
            <div className='hostel-title'>SUSRUTA</div><div className='hostel-score'>{SUSRUTA}</div>
            <div className='hostel-title'>KAUTILYA</div><div className='hostel-score'>{KAUTILYA}</div>
            <div className='hostel-title'>VYASA</div><div className='hostel-score'>{VYASA}</div>
            <div className='hostel-title'>BRAHMAGUPTA</div><div className='hostel-score'>{BRAHMAGUPTA}</div>
            <div className='hostel-title'>VARAHAMIHIRA</div><div className='hostel-score'>{VARAHAMIHIRA}</div>
            <div className='hostel-title'>RAMANUJA</div><div className='hostel-score'>{RAMANUJA}</div>
            <div className='hostel-title'>KAPILA</div><div className='hostel-score'>{KAPILA}</div>
        </div>
        </div>
    </div>
  )
}
