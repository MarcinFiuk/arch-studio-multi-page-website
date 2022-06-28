import useMatchMedia from './../hooks/useMatchMedia';
import AboutUsSection from '../components/home-page-sections/AboutUsSection';
import Hero from '../components/home-page-sections/Hero';
import SectionWithOnePhotoDisplayedAtDesktop from '../components/SectionWithOnePhotoDisplayedAtDesktop';
import FeaturedSection from '../components/home-page-sections/FeaturedSection';

function Home() {
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];
    return (
        <>
            <Hero media={media} />
            <SectionWithOnePhotoDisplayedAtDesktop
                photo='/assets/home/desktop/image-welcome.jpg'
                alt='tiled wall'
                photoWidth='350px'
                photoHeight='568px'
                decorationText='Welcome'
                marginLeft={true}
                changeDecorationElement={mobile}
                title={
                    <>
                        Welcome to <br /> Arch Studio
                    </>
                }
                desc1='We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled
                individuals combined with our large network put us in a
                strong position to deliver exceptional results.'
                desc2='Over the past 10 years, we have worked on all kinds of
                projects. From stations to high-rise buildings, we create
                spaces that inspire and delight.'
                desc3='We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in
                harmony the surrounding area to create truly stunning
                projects that will stand the test of time.'
            />
            <AboutUsSection media={media} />
            <FeaturedSection media={media} />
        </>
    );
}

export default Home;
