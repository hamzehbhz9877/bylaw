import React from 'react'
import {useState, useEffect} from 'react';

type timer = {
    sec: number,
    min: number
    timeOutFunc: () => void
}

const UseTimer = ({min, sec, timeOutFunc}: timer) => {
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);

    useEffect(() => {
        setMinutes(min)
        setSeconds(sec)
    }, [min, sec])

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    timeOutFunc()
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });


    return {minutes, seconds}
}

export default UseTimer;