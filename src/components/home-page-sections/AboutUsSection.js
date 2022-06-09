import styled from 'styled-components';

import { findPhotoSize } from '../../helpers/photoHelpers';
import {
    WrapperWithoutMobilePadding as Wrapper,
    HeadingM,
} from '../../styles/style-template';
import LinkButton from './../LinkButton';

function AboutUsSection({ media }) {
    const photoSize = findPhotoSize(media);
    const photoPath = `/assets/home/${photoSize}/image-small-team.jpg`;

    return (
        <WrapperUpdated path={photoPath}>
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
    background-image: ${({ path }) => path && `url(${path})`};
    background-size: cover;
    min-height: 560px;
    overflow: hidden;
    display: flex;

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
