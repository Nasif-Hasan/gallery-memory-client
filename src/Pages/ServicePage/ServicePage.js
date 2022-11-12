import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard';

const ServicePage = () => {
    const services = useLoaderData()
    return (
        <div>
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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