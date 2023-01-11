import {lazy, Suspense} from 'react';

type TImportFunction = () => Promise<{ readonly default: () => JSX.Element }>;
type TOptions = {
    fallback?: JSX.Element
}

const makeLoadableComponent = (importFunc: TImportFunction, options: TOptions = {}) => {
    const LazyComponent = lazy(importFunc);

    return (props: Record<any, any>) => (
        <Suspense fallback={options.fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default makeLoadableComponent;
