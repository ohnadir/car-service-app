import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ServiceContext } from '../../App';
import useServices from '../Hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const [services] = useServices();
    // const [services] = useContext(ServiceContext);
    const exists = services.find((item) => item.id === serviceId);
    console.log(exists);
    
    return (
        <div>
            <h2>Service Details {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;