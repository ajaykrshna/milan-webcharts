import React,{useState,useEffect} from 'react'
import Axios from "axios";
import "./Graphs.css";

export const Table = (props) => {
    const [Title, setTitle] = useState();
    const [CHARAKA, setCHARAKA] = useState();
    const [SUSRUTA, setSUSRUTA] = useState();
    const [KAUTILYA, setKAUTILYA] = useState();
    const [VYASA, setVYASA] = useState();
    const [BRAHMAGUPTA, setBRAHMAGUPTA] = useState();
    const [VARAHAMIHIRA, setVARAHAMIHIRA] = useState();
    const [RAMANUJA, setRAMANUJA] = useState();
    const [KAPILA, setKAPILA] = useState();



    const FetchData =(n)=>{
        Axios.get("./scores.json").then((res)=>{
            setTitle(res.data.SPORTS_BOYS[n].Column1);
            setCHARAKA(res.data.SPORTS_BOYS[n].CHARAKA);
            setSUSRUTA(res.data.SPORTS_BOYS[n].SUSRUTA);
            setKAUTILYA(res.data.SPORTS_BOYS[n].KAUTILYA);
            setVYASA(res.data.SPORTS_BOYS[n].VYASA);
            setBRAHMAGUPTA(res.data.SPORTS_BOYS[n].BRAHMAGUPTA);
            setVARAHAMIHIRA(res.data.SPORTS_BOYS[n].VARAHAMIHIRA);
            setRAMANUJA(res.data.SPORTS_BOYS[n].RAMANUJA);
            setKAPILA(res.data.SPORTS_BOYS[n].KAPILA);
        });
    }
    useEffect(() => {
        FetchData(props.sportsIndex);
    }, [])

  return (
    <>
            <div className='title'>{Title}</div>
            <div className='hostel-score'> {CHARAKA}</div>
            <div className='hostel-score'>{SUSRUTA}</div>
            <div className='hostel-score'>{KAUTILYA}</div>
            <div className='hostel-score'>{VYASA}</div>
            <div className='hostel-score'>{BRAHMAGUPTA}</div>
            <div className='hostel-score'>{VARAHAMIHIRA}</div>
            <div className='hostel-score'>{RAMANUJA}</div>
            <div className='hostel-score'>{KAPILA}</div>
    </>
  )
}
