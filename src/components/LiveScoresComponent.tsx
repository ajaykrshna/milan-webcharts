import React,{useState,useEffect} from 'react'
import { Table } from './Table';
import "./Graphs.css";

export const LiveScoresComponent = () => {    
   
  return (
    <>
    <div className="container" >
      <div id="Graph">
            <div className='hostel-title'>BOYS SPORTS</div>
            <div className='hostel-title'>CHARAKA</div>
            <div className='hostel-title'>SUSRUTA</div>
            <div className='hostel-title'>KAUTILYA</div>
            <div className='hostel-title'>VYASA</div>
            <div className='hostel-title'>BRAHMAGUPTA</div>
            <div className='hostel-title'>VARAHAMIHIRA</div>
            <div className='hostel-title'>RAMANUJA</div>
            <div className='hostel-title'>KAPILA</div>
            <Table sportsIndex = {0}/>
            <Table sportsIndex = {1}/>
            <Table sportsIndex = {2}/>
            <Table sportsIndex = {3}/>
            <Table sportsIndex = {4}/>
            <Table sportsIndex = {5}/>
            <Table sportsIndex = {6}/>
            <Table sportsIndex = {7}/>
            <Table sportsIndex = {8}/>
      </div>
            
    </div>
           
    
    </>
  )
}
