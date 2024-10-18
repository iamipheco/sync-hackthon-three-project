import React from 'react'
import DateTimeDisplay from '../DateTimeDisplay'
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  

  return (
    <>
    <div className="">
        <div className="">
            <DateTimeDisplay />
        </div>
    </div>
    <div className="border-b pb-5"></div>
    <div className="">
        <div className="">
            
        </div>
        <div className=""></div>
        <div className=""></div>
    </div>
    </>
  )
}

export default Dashboard