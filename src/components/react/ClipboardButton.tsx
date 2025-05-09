import { useState, type ButtonHTMLAttributes } from 'react'; // Import useState

type ButtonProps = {
    label: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'href'>;

export const ClipboardButton = ({ label, ...restProps }: ButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            console.log('a')
            await navigator.clipboard.writeText(label);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button
            onClick={handleCopyClick}
            {...restProps}
            className="rounded px-5 py-2.5 overflow-hidden  bg-tangelo-500 relative hover:bg-gradient-to-r hover:from-tangelo-600 hover:to-tangelo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-tangelo-400 transition-all ease-out duration-300 cursor-pointer"
        >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-amber-500 opacity-10 rotate-12 -hover:-translate-x-40 ease"></span>
            <span className="relative">{isCopied ? 'Copied!' : label}</span>
        </button>
    );
};