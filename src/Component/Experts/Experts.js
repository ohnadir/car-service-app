import React from 'react';
import Expert1 from '../../Experts/expert-1.jpg'
import Expert2 from '../../Experts/expert-2.jpg'
import Expert3 from '../../Experts/expert-3.jpg'
import Expert4 from '../../Experts/expert-4.jpg'
import Expert5 from '../../Experts/expert-5.jpg'
import Expert6 from '../../Experts/expert-6.png'
import Expert from '../Expert/Expert';
const experts = [
    {id:101, name:'Will Smith', img:Expert1},
    {id:102, name:'Chris Rock ', img:Expert2},
    {id:103, name:'Dwayne Rock', img:Expert3},
    {id:104, name:'Messy Vai', img:Expert4},
    {id:105, name:'Ronaldo Bro', img:Expert5},
    {id:106, name:'Stachy Jhonson', img:Expert6}
]
const Experts = () => {
    
    return (
        <div>

            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:max-w-5xl mx-auto md:max-w-2xl'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;