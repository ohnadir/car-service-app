import React from 'react';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services]= useServices();
    return (
        <div id='services'>

                <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-6xl mx-auto md:max-w-2xl'>
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </div>
            </div>
    );
};

export default Services;