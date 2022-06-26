import styled from 'styled-components';
import { useState, useId } from 'react';

import {
    HeadingM,
    ButtonTemplate,
    Paragraph,
} from './../styles/style-template';
import IconArrow from './icons/IconArrow';
import { validateForm } from './../helpers/formHelpers';

function ContactForm() {
    const [hasError, setHasError] = useState({});
    const userNameId = useId();
    const emailId = useId();
    const messageId = useId();

    const formValidationHandler = (event) => {
        event.preventDefault();

        const errors = validateForm(event);

        setHasError(errors);
    };

    return (
        <Wrapper>
            <HeadingM as='h2' color='var(--veryDarkBlue)'>
                Connect with us
            </HeadingM>
            <form onSubmit={formValidationHandler}>
                <FormChildWrapper>
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={userNameId}
                    >
                        Name:
                    </Label>
                    <input
                        id={userNameId}
                        name='userName'
                        type='text'
                        placeholder='type name'
                    />
                </FormChildWrapper>
                <FormChildWrapper>
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={emailId}
                    >
                        Email:
                    </Label>
                    <input
                        id={emailId}
                        name='email'
                        // type='email'
                        placeholder='type email'
                    />
                </FormChildWrapper>
                <FormChildWrapper>
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={messageId}
                    >
                        Message:
                    </Label>
                    <textarea
                        id={messageId}
                        rows='3'
                        name='message'
                        type='text'
                        placeholder='type message'
                    />
                </FormChildWrapper>
                <ButtonSubmit>
                    <IconArrow />
                </ButtonSubmit>
            </form>
        </Wrapper>
    );
}

//NOTE: why textarea div is bigger than content?

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    width: 100%;

    h2 {
        flex-basis: 50%;
    }

    @media (min-width: 48rem) {
        gap: 3.75rem;
        h2 {
            flex-basis: 100%;
        }
    }

    @media (min-width: 64rem) {
        flex-direction: row;
        justify-content: space-between;

        h2 {
            flex-basis: 30%;
        }

        form {
            flex-basis: 60%;
        }
    }
`;

const FormChildWrapper = styled.div`
    margin-bottom: 2.75rem;

    &:last-of-type {
        margin-bottom: 0;
    }

    input,
    textarea {
        border: 2px solid transparent;
        border-bottom: 1px solid var(--veryDarkBlue);
        width: 100%;
        font-weight: var(--fontWeight-700);
        font-size: 1.25rem;
        line-height: 22px;
        letter-spacing: -0.3125px;
        padding-left: 32px;
        padding-right: 16px;
    }

    textarea {
        resize: none;

        &::placeholder {
            transform: translateY(200%);
        }
    }

    input:focus,
    textarea:focus {
        border: 2px solid orange;
        border-bottom: 1px solid orange;
    }

    input::placeholder,
    textarea::placeholder {
        color: var(--lightGrey);
    }
`;

const Label = styled(Paragraph)`
    margin-left: 32px;
`;

const ButtonSubmit = styled(ButtonTemplate)`
    display: grid;
    place-items: center;
    padding: 0;
    width: 80px;
    height: 80px;
    margin-left: auto;
    transform: translateY(-8px);
`;

export default ContactForm;
