
import React from 'react';
import { assets } from '../assets';
import Title from '../shared/Title';
import Categories from '../components/Categories';
import AlbumsList from '../components/AlbumsList';
import InfoOrder from '../components/InfoOrder';

const Home = () => {
    return (
        <>
        <div className=" ">
            <img className="w-full h-[725px] h-auto object-cover" src={assets.banner} alt="Banner" />
        </div>
{/* .................................category section start................................................ */}
        <div className='md:mt-8 mt-4'>
            <Title title={"Categories"}/>
             <Categories/>
         </div>
{/* .................................category section end ................................................ */}
{/* .................................most section start ................................................ */}
<div className='overflow-hidden mt-8'>
    <Title title={"Most Loveable Albums"}/>
    <AlbumsList/>
</div>
{/* .................................most section end ................................................ */}
{/* .................................info section start ................................................ */}

<div className='sm:mt-16 mt-4'>
    <InfoOrder/>
</div>
 
        </>
    );
}

export default Home;
