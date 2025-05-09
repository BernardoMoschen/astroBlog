import type { FC } from "react"
import { useCurrentTime } from '@/utils/useCurrentTime';
import Icon from './Icon';

interface LocationCardProps {
    location: string;
    countryCode: string;
    temperature: number;
    weather: string;
}

export const LocationCard: FC<LocationCardProps> = ({ location, countryCode, temperature, weather }) => {
    const { hour, minute, second } = useCurrentTime(false);

    return (
        <div id='locationCard' className="fadein relative z-30 ml-0 lg:ml-24">
            <Icon name='beeOrigami'
                className="
                h-12 w-12 sticker absolute -top-5 left-35 -rotate-12 z-20 transition-transform hover:scale-110 hover:rotate-3 active:translate-y-1 active:scale-105 text-tangelo-400"
            />
            <div className="relative h-40 cursor-default overflow-hidden rounded-xl bg-neutral-800 p-2 shadow-sm shadow-black">

                <Icon name='brazil'
                    className="
                    fade-in-up absolute top-1/2 -left-45 -mt-[25%] -translate-y-1/2 scale-[0.75]"
                />
                <div className="relative flex h-full items-center rounded-lg border border-neutral-600 px-8">
                    <div className="flex h-full flex-1 flex-col items-end justify-center gap-1" >
                        <div className=" text-neutral-300 text-xl">Currently in{' '}
                            <span className='text-white font-bold' > {location}, {countryCode}</span >
                        </div >
                        <div className='flex flex-row   items-center mt-1 gap-4 px-2.5 py-1 text rounded-full border-2 border-neutral-600 bg-neutral-800'>
                            <div className="flex items-center justify-center gap-2 ml-1">
                                <Icon name="clock" className="w-5 h-5 text-tangelo-500" />
                                <span className="font-normal text-neutral-300 whitespace-nowrap ">{hour}:{minute}:{second}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 mr-1">
                                <Icon name="sun" className="w-5 h-5 text-tangelo-500" />
                                <span className="font-normal text-neutral-300 whitespace-nowrap ">{temperature}°C</span>
                            </div>
                        </div>
                        {/* <div className="mt-2 text-sm text-neutral-300">{weather}</div> */}
                    </div >
                </div>
            </div>
        </div>
    );
};

