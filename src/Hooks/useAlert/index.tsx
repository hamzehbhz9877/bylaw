import React, {useEffect, useRef, useState} from 'react';

type alert = {
    timeout: number
    remove?: (id: string) => void
    id: string,
    ref:  React.MutableRefObject<HTMLDivElement>
}

const useAlert = ({timeout, remove, id, ref}: alert) => {
    const timerRef = ref;

    const animationAlert = useRef<number | NodeJS.Timeout>(null!);
    const alert = useRef<number | NodeJS.Timeout>(null!);
    const animationDuration = useRef<number>(null!);

    const [state, setState] = useState(false);

    useEffect(() => {
        if (timerRef.current) {
            timerRef.current.style.animationDuration = timeout + 's';
            animationDuration.current = parseInt(
                getComputedStyle(timerRef.current).animationDuration
            );
        }
        handleRemove(timeout);
        return () => handleRemoveAlert();
    }, []);

    const handleRemoveAlertFocusEnd = () => {
        if (remove)
            alert.current = setTimeout(() => {
                remove(id);
            }, animationDuration.current * 100);
    };

    const handleRemoveAlert = () => {
            clearInterval(animationAlert.current);
        if (alert.current)
            clearInterval(alert.current);
    };

    const handleRemove = (alertAnimationTimer: number) => {
        animationAlert.current = setTimeout(() => {
            setState(true);
            handleRemoveAlertFocusEnd();
        }, alertAnimationTimer * 1000);
    };

    const handleDelete = () => {
        setState(true);
        handleRemoveAlertFocusEnd();
    };

    return {state, handleDelete};
};

export default useAlert;