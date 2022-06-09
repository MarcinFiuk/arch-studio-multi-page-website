import styled from 'styled-components';

import PortfolioPhoto from '../PortfolioPhoto';
import { HeadingM } from '../../styles/style-template';
import { photoData } from '../../data/home-page-featured-photo.js.js';
import LinkButton from './../LinkButton';

function FeaturedSection({ media }) {
    const photos = photoData.map((photo) => {
        return (
            <PortfolioPhoto key={photo.id} photoData={photo} media={media} />
        );
    });

    return (
        <Wrapper>
            <HeadingMUpdated as='h2' color='var(--veryDarkBlue)'>
                Featured
            </HeadingMUpdated>
            <LinkButton to='portfolio' custom='featuredSection'>
                See All
            </LinkButton>
            <PhotosWrapper>{photos}</PhotosWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'title title' 'photo photo' 'link link';
    width: 100%;
    overflow: hidden;

    @media (min-width: 48rem) {
        grid-template-areas: 'title link' 'photo photo';
        row-gap: 5.25rem;
    }

    @media (min-width: 64rem) {
        row-gap: 4rem;
    } ;
`;

const HeadingMUpdated = styled(HeadingM)`
    grid-area: title;
    margin-bottom: 2.75rem;

    @media (min-width: 48rem) {
        margin-bottom: 0;
    }
`;

const PhotosWrapper = styled.div`
    grid-area: photo;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;

    @media (min-width: 48rem) {
        margin-bottom: 0;
    }

    @media (min-width: 64rem) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--gapPortfolioProjectDesktop);
    }
`;

export default FeaturedSection;
