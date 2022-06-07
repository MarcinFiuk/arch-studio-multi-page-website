import useMatchMedia from './../hooks/useMatchMedia';
import AboutUsSection from '../components/home-page-sections/AboutUsSection';
import Hero from '../components/home-page-sections/Hero';
import WelcomeSection from '../components/home-page-sections/WelcomeSection';
import FeaturedSection from '../components/home-page-sections/FeaturedSection';

function Home() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];
    return (
        <>
            <Hero media={media} />
            <WelcomeSection />
            <AboutUsSection media={media} />
            <FeaturedSection media={media} />
        </>
    );
}

export default Home;
