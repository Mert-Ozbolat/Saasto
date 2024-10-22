import React from 'react'
import '../Styles/UserAnalysis.css'



const UserAnalysis = () => {
    return (
        <div className='userContainer mt-2 container mx-auto px-5'>
            <div className='activeUser text-center' >
                <h1>115k+</h1>
                <span>Active user</span>
            </div>
            <div className='passiveUser text-center'>
                <h1>88k</h1>
                <span>User passive</span>
            </div>
            <div className='increaseUser text-center'>
                <h1>30%</h1>
                <span>Increase in user</span>
            </div>
            <div className='tesimonials text-center position-relative'>
                <h1>&gt;10k</h1>
                <span>Good Tesimonials</span>
            </div>
        </div>
    )
}


export default UserAnalysis