import { PortfolioPhotosWrapper } from './../../styles/style-template';
import { portfolioData } from './../../data/portfolio-page-photos';
import PortfolioPhoto from './../PortfolioPhoto';

function PortfolioPhotos() {
    const photos = portfolioData.map((photo) => {
        return <PortfolioPhoto key={photo.id} photoData={photo} />;
    });

    return <PortfolioPhotosWrapper>{photos}</PortfolioPhotosWrapper>;
}

export default PortfolioPhotos;
