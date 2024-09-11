import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

const OnlineDelivery = () => {
    const [data, setData] = useState([]);
    const componentRef = useRef(null);
    const [isAtTop, setIsTop] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(componentRef.current){
                const rect = componentRef.current.getBoundingClientRect();
                setIsTop(rect.top <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
    })

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(all => {
                console.log(all); // Log the entire response to check its structure
                setData(all.recipes || []); // Adjust based on actual API response
            })
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <div className="max-w-[1200px] mx-auto" ref={componentRef}>
            <div className="flex items-center justify-between my-5">
                <div className="font-semibold text-[25px] capitalize">restaurant with online food delivery in Gilgit</div>
                
            </div>
                <div className={isAtTop ? `fixed top-0 z-[99999] bg-green-600 w-full left-0 text-center`: ``}>
                    <div className='max-w-[1200px] mx-auto flex my-3  gap-9 capitalize cursor-pointer '>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>filter</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>sort by</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>fast delivery</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>new on Gilgit</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>RS 300-rs 600</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>offers</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>rating40+</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>place</div>
                        <div className='p-3 rounded-md shadow hover:text-[red]'>more</div>
                        
                    </div>
                </div>
            <div className='grid grid-cols-4 gap-3'>
            {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
            </div>
        </div>
    )
}

export default OnlineDelivery