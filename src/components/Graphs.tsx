import React,{useState,useEffect} from 'react'
import Axios from "axios";

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
        }).catch(err => console.log(err)
        );
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
    <div>
        <div id='Graph' className=''>
        <h3 className='title'>{Title}</h3>
            <div className='hostel-scores'>CHARAKA <span>{CHARAKA}</span></div>
            <div className='hostel-scores'>SUSRUTA<span>{SUSRUTA}</span></div>
            <div className='hostel-scores'>KAUTILYA<span>{KAUTILYA}</span></div>
            <div className='hostel-scores'>VYASA<span>{VYASA}</span></div>
            <div className='hostel-scores'>BRAHMAGUPTA<span>{BRAHMAGUPTA}</span></div>
            <div className='hostel-scores'>VARAHAMIHIRA<span>{VARAHAMIHIRA}</span></div>
            <div className='hostel-scores'>RAMANUJA<span>{RAMANUJA}</span></div>
            <div className='hostel-scores'>KAPILA<span>{KAPILA}</span></div>
        </div>
    </div>
  )
}
