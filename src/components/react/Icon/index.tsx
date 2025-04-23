import { Fire, GitHub, LinkedIn, TerminalFilled, TerminalOutlined, Thumbtack } from '@/components/react/Icon/icons'
import type { FC, SVGProps } from 'react';

type IconName = 'terminalOutlined' | 'terminalFilled' | 'github' | 'linkedin' | 'fire' | 'thumbtack';


interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

const iconMapping: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
    github: GitHub,
    linkedin: LinkedIn,
    fire: Fire,
    thumbtack: Thumbtack,
    terminalFilled: TerminalFilled,
    terminalOutlined: TerminalOutlined,
};


export default function Icon({ name, ...restProps }: IconProps) {
    const IconComponent = iconMapping[name];

    return <IconComponent {...restProps} />;


}

