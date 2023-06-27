import {alert} from 'Context/alert';
import useAlert from "Hooks/useAlert";
import {useRef} from "react";

const Alert = (data: alert) => {
    const {timeout, remove, message, type, showProgress, id} = data

    const ref = useRef<HTMLDivElement>(null!)

    const {state, handleDelete} = useAlert({timeout, remove, id, ref})

    return (
        <div
            className={`sweet-alert--show ${state && 'sweet-alert--hide'}`}
            onClick={handleDelete}
        >
            <div className={`sweet-alert__wrapper sweet-alert__wrapper--${type}`}>
                <div className={`sweet-alert-${id}`}>
                    <p className="mb-0">{message}</p>
                    {showProgress && <div className="sweet-alert__animate" ref={ref}/>}
                </div>
            </div>
        </div>
    );
};

export default Alert;
