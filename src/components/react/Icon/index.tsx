import { Briefcase, Clock, Fire, GitHub, LinkedIn, Sun, TerminalOutlined, BeeOrigami, Robot, Brazil } from '@/components/react/Icon/icons'
import type { FC, SVGProps } from 'react';

type IconName =
    'terminalOutlined' |
    'github' |
    'linkedin' |
    'fire' |
    'clock' |
    'sun' |
    'briefcase' |
    'beeOrigami' |
    'robot' |
    'brazil';
;


interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

const iconMapping: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
    github: GitHub,
    briefcase: Briefcase,
    linkedin: LinkedIn,
    fire: Fire,
    clock: Clock,
    sun: Sun,
    robot: Robot,
    brazil: Brazil,
    beeOrigami: BeeOrigami,
    terminalOutlined: TerminalOutlined,
};


export default function Icon({ name, ...restProps }: IconProps) {
    const IconComponent = iconMapping[name];

    return <IconComponent {...restProps} />;


}

