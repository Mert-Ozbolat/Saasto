import React from 'react'
import '../Styles/Manage.css'
import Circle from '../Assets/Images/circle.png'
import Graph from '../Assets/Images/graph.png'
import Phones from '../Assets/Images/phones.png'
import dots from '../Assets/Images/dots.png'
import Total from '../Assets/Images/total.png'


const Manage = () => {
    return (

        <section className='flex items-center justify-between mt-2 container mx-auto px-5'>
            <img src={dots} alt="dots" className='dots' />
            <div className='titles'>
                <h1>Manage Your
                    Business <span>Finance</span> Easily
                </h1>
                <img src={Circle} alt="Circle" className='circle' />

                <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>

                <button className='trialBtn'>Start 14 Days Trial</button>
            </div>

            <div className='slideImages'>
                <img src={Phones} alt="Phones" className='phones' />
                <img src={Total} alt="total" className='total' />
                <img src={Graph} alt="graph" className='graph' />
            </div>

        </section>
    )
}

export default Manage