import {Suspense} from 'react';
import AsyncLoading from "Routes/lazy/loading";

export const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
    (
        <Suspense fallback={<AsyncLoading/>}>
            <Component {...props} />
        </Suspense>
    );

