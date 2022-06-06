import styled from 'styled-components';

import { findPhotoSize } from './../../helpers/photoHelpers';
import {
    WrapperWithoutMobilePadding as Wrapper,
    HeadingM,
    ButtonTemplate,
    ImgMask,
} from './../../styles/style-template';
import IconArrow from './../icons/IconArrow';

function AboutUsSection({ media }) {
    const photoSize = findPhotoSize(media);
    const photoPath = `/assets/home/${photoSize}/image-small-team.jpg`;
    return (
        <WrapperUpdated>
            <Photo src={photoPath} alt='house on water' />
            <ImgMask />
            <Info>
                <HeadingM as='h2'>
                    Small team, <br />
                    big ideas
                </HeadingM>
                <ButtonTemplate>
                    About Us
                    <span>
                        <IconArrow />
                    </span>
                </ButtonTemplate>
            </Info>
        </WrapperUpdated>
    );
}

const WrapperUpdated = styled(Wrapper)`
    min-height: 560px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-left: 2rem;

    @media (min-width: 48rem) {
        padding-left: 3.5rem;
    }

    @media (min-width: 64rem) {
        padding-left: 12rem;
    }
`;

const Photo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Info = styled.div`
    z-index: 10;

    h2 {
        margin-bottom: 23px;
    }
`;

export default AboutUsSection;
