import { cn } from '@/utils';
import type { AnchorHTMLAttributes } from 'react';

type ButtonProps = {
    label: string;
    href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export const Button = ({ label, href, className, ...restProps }: ButtonProps) => {
    return (
        <a href={href}
            className={cn(className, "cursor-pointer rounded px-5 py-2.5 overflow-hidden  bg-tangelo-500 relative hover:bg-gradient-to-r hover:from-tangelo-600 hover:to-tangelo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-tangelo-400 transition-all ease-out duration-300")}>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-amber-500 opacity-10 rotate-12 -hover:-translate-x-40 ease"></span>
            <span className="relative">{label}</span>
        </a>
    );
};