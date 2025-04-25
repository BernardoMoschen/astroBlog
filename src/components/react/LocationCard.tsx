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
        <div className="w-fit flex flex-col items-end justify-center py-2 px-8 bg-neutral-800 rounded-xl shadow-sm shadow-neutral-500 gap-2 whitespace-nowrap cursor-default text-xl " >
            <div className=" text-neutral-300">Currently in{' '}
                <span className='text-white font-bold' > {location}, {countryCode}</span >
            </div >
            <div className='flex flex-row   items-center mt-1 gap-4 px-2.5 py-1 rounded-full border-2 border-neutral-600 bg-neutral-800'>
                <div className="flex items-center justify-center gap-2 ml-1">
                    <Icon name="clock" className="w-5 h-5 text-tangelo-500" />
                    <span className="font-bold whitespace-nowrap ">{hour}:{minute}:{second}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mr-1">
                    <Icon name="sun" className="w-5 h-5 text-tangelo-500" />
                    <span className="font-bold whitespace-nowrap ">{temperature}°C</span>
                </div>
            </div>
            {/* <div className="mt-2 text-sm text-neutral-300">{weather}</div> */}
        </div >
    );
};

