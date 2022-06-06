import useMatchMedia from './../hooks/useMatchMedia';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Hero from '../components/Hero/Hero';
import Welcome from '../components/Welcome/Welcome';

function Home() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];
    return (
        <>
            <Hero media={media} />
            <Welcome />
            <AboutUsSection media={media} />
        </>
    );
}

export default Home;
