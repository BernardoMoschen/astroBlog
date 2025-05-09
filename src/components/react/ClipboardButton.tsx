import { cn } from '@/utils';
import { useState, useRef, useLayoutEffect, type ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    label: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'href'>;

export const ClipboardButton = ({ label, ...restProps }: ButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const [minW, setMinW] = useState<number>();
    const btnRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        if (btnRef.current) {
            setMinW(btnRef.current.offsetWidth);
        }
    }, []);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(label);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            ref={btnRef}
            onClick={handleCopyClick}
            {...restProps}
            style={minW ? { minWidth: `${minW}px` } : undefined}
            className="flex bg-gradient-to-r from-neutral-300 to-neutral-500 hover:from-tangelo-400 hover:to-tangelo-600 font-bold py-3 px-3 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
            <span className="flex-1 text-black">
                {isCopied ? 'Email Copied!' : label}
            </span>
        </button>
    );
};