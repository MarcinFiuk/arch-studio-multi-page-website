import { useState, useEffect } from 'react';

function useMatchMedia(mediaQueryString) {
    const [mediaQueryList, setMediaQueryList] = useState(null);
    const [isMatch, setIsMatch] = useState(false);

    const listenToChange = (e) => {
        setIsMatch(e.matches);
    };

    useEffect(() => {
        const list = window.matchMedia(mediaQueryString);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQueryString]);

    if (mediaQueryList) {
        mediaQueryList.addEventListener('change', listenToChange);
    }

    return isMatch;
}

export default useMatchMedia;
