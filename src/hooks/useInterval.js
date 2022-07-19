import { useEffect, useRef } from 'react';

function useInterval(callback, delay, additionalDependency) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        function startInterval() {
            callbackRef.current();
        }

        if (delay !== null) {
            let id = setInterval(startInterval, delay);
            return () => clearInterval(id);
        }
    }, [delay, additionalDependency]);
}

export default useInterval;
