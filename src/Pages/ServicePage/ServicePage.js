import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard';

const ServicePage = () => {
    const services = useLoaderData()
    
    return (
        <div>
            <h2 className='text-5xl font-bold pl-10 pt-10 text-orange-400'>All of our services</h2>
            <div className=' container my-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicePage;