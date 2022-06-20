import styled from 'styled-components';

import useMatchMedia from './../hooks/useMatchMedia';
import HeroSecondary from '../components/HeroSecondary';
import SectionWithOnePhotoDisplayedAtDesktop from '../components/SectionWithOnePhotoDisplayedAtDesktop';
import Leaders from '../components/about-page/Leaders';

function About() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];

    return (
        <>
            <HeroSecondary
                media={media}
                photo='hero'
                photoLocation = 'about'
                alt='hands on a keyboard'
                decorationText='About'
                title='Your team of professionals'
                desc='Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'
            />
            <SectionWithOnePhotoDisplayedAtDesktop
                photo='/assets/about/desktop/image-heritage.jpg'
                alt='office windows'
                photoWidth='540px'
                photoHeight='568px'
                changeDecorationElement={true}
                title={
                    <>
                        Our <br />
                        Heritage
                    </>
                }
                desc1='Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.'
                desc2='Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.'
                desc3='Our small team of world-class professionals provides input on every project.'
            />
            <Leaders />
        </>
    );
}

export default About;
