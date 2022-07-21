import styled from 'styled-components';

import {
    HeadingM,
    Paragraph,
    ButtonTemplate,
    DecorativeLine,
} from './../../styles/style-template';
import IconArrow from './../icons/IconArrow';

function ContactDetails({ title, offices, getOfficeIndex }) {
    const contactDetails = offices.map((office, index) => {
        const { id, officeTitle, email, address, phoneNr } = office;
        const { location, city, postCode } = address;

        return (
            <AddressWrapper key={id}>
                <ContactWrapper>
                    <Paragraph
                        fontWeight='var(--fontWeight-700)'
                        lineHeight='35px'
                    >
                        {officeTitle}
                    </Paragraph>
                    <Paragraph>Email: {email}</Paragraph>
                    <Paragraph>
                        Address: {location}, {city} {postCode}
                    </Paragraph>
                    <Paragraph as='a' href={'tel:+' + phoneNr}>
                        Phone: {phoneNr}
                    </Paragraph>
                </ContactWrapper>
                <ButtonTemplateUpdated onClick={() => getOfficeIndex(index)}>
                    View on Map
                    <span>
                        <IconArrow stroke='var(--veryDarkBlue)' />
                    </span>
                </ButtonTemplateUpdated>
            </AddressWrapper>
        );
    });
    return (
        <MainWrapper>
            <DecorativeLine />
            <Wrapper>
                <HeadingM as='h2' color='var(--veryDarkBlue)'>
                    {title}
                </HeadingM>
                {contactDetails}
            </Wrapper>
        </MainWrapper>
    );
}

const MainWrapper = styled.section`
    position: relative;
    padding-top: 4.25rem;

    @media (min-width: 48rem) {
        padding-top: 3.125rem;
    }

    @media (min-width: 64rem) {
        padding-top: 4.5rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (min-width: 48rem) {
        gap: 2.75rem;
    }

    @media (min-width: 64rem) {
        gap: 2rem;
        justify-content: space-between;
    }

    @media (min-width: 64rem) {
        flex-direction: row;
    }
`;

const AddressWrapper = styled.div`
    @media (min-width: 48rem) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    @media (min-width: 64rem) {
        flex-direction: column;
        align-items: flex-start;
        flex-basis: 30%;
    }
`;

const ContactWrapper = styled.div`
    margin-bottom: 2.75rem;
    p:first-child {
        margin-bottom: 1rem;
    }

    @media (min-width: 48rem) {
        margin-bottom: 0;
    }

    @media (min-width: 64rem) {
        margin-bottom: 3.75rem;
    }
`;

const ButtonTemplateUpdated = styled(ButtonTemplate)`
    background-color: transparent;
    color: var(--veryDarkBlue);
    padding: 0;
    display: flex;
    min-width: fit-content;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    span {
        margin-left: 1rem;
        margin-right: 1rem;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        border-color: var(--veryDarkBlue);
    }

    &:hover span {
        margin-left: 2rem;
        margin-right: 0;
    }
`;

export default ContactDetails;
