import useMatchMedia from './../hooks/useMatchMedia';
import PortfolioPhotos from './../components/portfolio-page-sections/PortfolioPhotos';

function Portfolio() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];
    return <PortfolioPhotos media={media} />;
}

export default Portfolio;
