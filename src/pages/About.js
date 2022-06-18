import styled from 'styled-components';

import useMatchMedia from './../hooks/useMatchMedia';
import HeroSecondary from '../components/HeroSecondary';

function About() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];

    return (
        <>
            <HeroSecondary
                media={media}
                photo='hero'
                alt='hands on a keyboard'
                decorationText='About'
                title='Your team of professionals'
                desc='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
            />
            {/* About short desc */}
            {/* About Leaders */}
        </>
    );
}

export default About;
