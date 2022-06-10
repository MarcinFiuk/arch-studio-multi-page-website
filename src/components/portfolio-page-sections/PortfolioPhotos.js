import { PortfolioPhotosWrapper } from './../../styles/style-template';
import { data } from './../../data/portfolio-page-photos';
import PortfolioPhoto from './../PortfolioPhoto';

function PortfolioPhotos({ media }) {
    const photos = data.map((photo) => {
        return (
            <PortfolioPhoto key={photo.id} photoData={photo} media={media} />
        );
    });

    return <PortfolioPhotosWrapper>{photos}</PortfolioPhotosWrapper>;
}

export default PortfolioPhotos;
