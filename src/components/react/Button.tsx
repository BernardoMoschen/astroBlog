import { cn } from '@/utils';
import type { AnchorHTMLAttributes } from 'react';

type ButtonProps = {
    label: string;
    href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export const Button = ({ label, href, className, ...restProps }: ButtonProps) => {
    return (
        <a href={href} {...restProps}>
            <button className={cn("cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2", className)}>
                <span className="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">{label}</span>
                <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
        </a>
    );
};