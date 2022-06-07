import styled from 'styled-components';

import { findPhotoSize } from '../../helpers/photoHelpers';
import {
    WrapperWithoutMobilePadding as Wrapper,
    HeadingM,
    ImgMask,
    LinkStyled,
} from '../../styles/style-template';
import IconArrow from '../icons/IconArrow';

function AboutUsSection({ media }) {
    const photoSize = findPhotoSize(media);
    const photoPath = `/assets/home/${photoSize}/image-small-team.jpg`;

    return (
        <WrapperUpdated path={photoPath}>
            <MaskWrapper>
                <Info>
                    <HeadingM as='h2'>
                        Small team, <br />
                        big ideas
                    </HeadingM>
                    <LinkStyled to='about'>
                        About Us
                        <span>
                            <IconArrow />
                        </span>
                    </LinkStyled>
                </Info>
            </MaskWrapper>
        </WrapperUpdated>
    );
}

const WrapperUpdated = styled(Wrapper)`
    background-image: ${({ path }) => path && `url(${path})`};
    min-height: 560px;
    overflow: hidden;
    display: flex;
`;

const MaskWrapper = styled.div`
    background-color: hsla(1, 1%, 1%, 0.5);
    display: flex;
    width: inherit;
    height: inherit;
`;

const Info = styled.div`
    padding-left: 2rem;
    align-self: center;

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
