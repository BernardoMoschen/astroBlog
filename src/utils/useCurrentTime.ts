import { useState, useEffect } from "react";

const getBrasiliaTime = (): {
    hour: number;
    minute: number;
    second: number;
} => {
    const dt = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    };
    const [hour, minute, second] = new Intl.DateTimeFormat("en-US", options)
        .format(dt)
        .split(":")
        .map((value) => parseInt(value, 10));

    return { hour, minute, second };
};

export const useCurrentTime = (useViewerTime: boolean = true) => {
    const getTime = () =>
        useViewerTime
            ? {
                  hour: new Date().getHours(),
                  minute: new Date().getMinutes(),
                  second: new Date().getSeconds(),
              }
            : getBrasiliaTime();

    const [time, setTime] = useState<{
        hour: number;
        minute: number;
        second: number;
    }>(getTime());

    useEffect(() => {
        const updateTime = () => {
            setTime(getTime());
        };

        const intervalId = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(intervalId);
    }, [useViewerTime]);

    return time;
};
