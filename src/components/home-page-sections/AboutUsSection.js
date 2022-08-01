import styled from 'styled-components';

import {
    WrapperWithoutMobilePadding as Wrapper,
    HeadingM,
} from '../../styles/style-template';
import LinkButton from './../LinkButton';

function AboutUsSection() {
    return (
        <WrapperUpdated>
            <Info>
                <HeadingM as='h2'>
                    Small team, <br />
                    big ideas
                </HeadingM>
                <LinkButton to='about'>About Us</LinkButton>
            </Info>
        </WrapperUpdated>
    );
}

const WrapperUpdated = styled(Wrapper)`
    position: relative;
    background-color: var(--lightGray);
    background-image: url('/assets/home/mobile/image-small-team.jpg');
    background-size: cover;
    min-height: 560px;
    overflow: hidden;
    display: flex;

    @media (min-width: 48rem) {
        background-image: url('/assets/home/tablet/image-small-team.jpg');
    }
    @media (min-width: 64rem) {
        background-image: url('/assets/home/desktop/image-small-team.jpg');
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: hsla(1, 1%, 1%, 0.5);
    }
`;

const Info = styled.div`
    padding-left: 2rem;
    align-self: center;
    z-index: 10;

    h2 {
        margin-bottom: 1.5rem;
    }

    @media (min-width: 48rem) {
        padding-left: 3.5rem;
    }

    @media (min-width: 64rem) {
        padding-left: 12rem;
    }
`;

export default AboutUsSection;
