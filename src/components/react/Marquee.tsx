export const Marquee = () => {
    return (
        <div className='relative  w-full flex overflow-x-hidden'>
            <div className='py-12 w-full  animate-marquee whitespace-nowrap'>
                <span className='text-4xl mx-4'>Marquee Item 1</span>
                <span className='text-4xl mx-4'>Marquee Item 2</span>
                <span className='text-4xl mx-4'>Marquee Item 3</span>
                <span className='text-4xl mx-4'>Marquee Item 4</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
            </div>

            <div className='absolute w-full  top-0 py-12 animate-marquee2 whitespace-nowrap'>
                <span className='text-4xl mx-4'>Marquee Item 1</span>
                <span className='text-4xl mx-4'>Marquee Item 2</span>
                <span className='text-4xl mx-4'>Marquee Item 3</span>
                <span className='text-4xl mx-4'>Marquee Item 4</span>
                <span className='text-4xl mx-4'>Marquee Item 5</span>
            </div>
        </div>
    )
}
