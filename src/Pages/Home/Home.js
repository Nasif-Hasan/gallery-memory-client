import { Link, useLoaderData } from 'react-router-dom';
import Carousel from '../../Components/Carousel';
import ExtraPart from '../../Components/ExtraPart';
import ServiceCard from '../../Components/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Carousel></Carousel>

            <div>
                <div className='text-center '>
                    <p className='text-5xl py-10 font-bold text-orange-500'>Our Demanding Services </p>
                </div>
                <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.slice(0, 3).map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <div className='my-10 text-center'>
                    <Link to='/servicePage'>
                        <button className="btn text-orange-400">See All Services</button>
                    </Link>
                </div>
            </div>

            {/* Extra sections */}
            <ExtraPart></ExtraPart>

        </div>
    );
};

export default Home;