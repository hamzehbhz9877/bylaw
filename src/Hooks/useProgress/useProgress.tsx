import QProgress, {NProgressOptions} from 'nprogress';


export interface withTrickleRate extends NProgressOptions {
    trickleRate: number;
}

const defaultConfig = {
    trickleRate: 0.03,
    showSpinner: false,
    minimum: 0.08,
}


const UseProgress = ({config}: { config?: withTrickleRate }) => {

    QProgress.configure({
        ...defaultConfig,
        ...config
    } as withTrickleRate);

    return QProgress;
};

export default UseProgress;
