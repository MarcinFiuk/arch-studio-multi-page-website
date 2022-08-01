import styled, { css } from 'styled-components';
import { useState, useId } from 'react';

import {
    HeadingM,
    ButtonTemplate,
    Paragraph,
    VisuallyHidden,
} from './../styles/style-template';
import IconArrow from './icons/IconArrow';
import Error from './Error';
import { checkValidity, isEmpty } from './../helpers/formValidation';

function ContactForm() {
    const [hasError, setHasError] = useState({});
    const id = useId();

    const formValidationHandler = (e) => {
        e.preventDefault();

        if (!e.currentTarget.checkValidity() || !isEmpty(hasError)) {
            const userNameValidation = checkValidity(e.target.userName);
            const emailValidation = checkValidity(e.target.email);
            const messageValidation = checkValidity(e.target.message);

            setHasError({
                ...userNameValidation,
                ...emailValidation,
                ...messageValidation,
            });
        }
    };

    return (
        <Wrapper>
            <HeadingM as='h2' color='var(--veryDarkBlue)'>
                Connect with us
            </HeadingM>
            <form onSubmit={formValidationHandler} noValidate>
                <FormChildWrapper
                    fieldHasError={hasError.userName ? true : false}
                >
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={`${id}-name`}
                    >
                        Name:
                    </Label>
                    <input
                        id={`${id}-name`}
                        name='userName'
                        type='text'
                        placeholder='type name'
                        required
                    />
                    {hasError.userName && (
                        <Error errorMessage={hasError.userName} />
                    )}
                </FormChildWrapper>
                <FormChildWrapper fieldHasError={hasError.email ? true : false}>
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={`${id}-email`}
                    >
                        Email:
                    </Label>
                    <input
                        id={`${id}-email`}
                        name='email'
                        type='email'
                        placeholder='type email'
                        required
                    />
                    {hasError.email && <Error errorMessage={hasError.email} />}
                </FormChildWrapper>
                <FormChildWrapper
                    fieldHasError={hasError.message ? true : false}
                >
                    <Label
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={`${id}-message`}
                    >
                        Message:
                    </Label>
                    <textarea
                        id={`${id}-message`}
                        rows='3'
                        name='message'
                        placeholder='type message'
                        required
                    />
                    {hasError.message && (
                        <Error errorMessage={hasError.message} />
                    )}
                </FormChildWrapper>
                <ButtonSubmit>
                    <VisuallyHidden>Submit</VisuallyHidden>
                    <IconArrow />
                </ButtonSubmit>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
    width: 100%;

    h2 {
        width: 80%;
    }

    @media (min-width: 48rem) {
        gap: 3.75rem;
        h2 {
            width: 100%;
        }
    }

    @media (min-width: 64rem) {
        flex-direction: row;
        justify-content: space-between;

        h2 {
            width: 30%;
        }

        form {
            width: 60%;
        }
    }
`;

const FormChildWrapper = styled.div`
    margin-bottom: 2.75rem;
    position: relative;

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
        padding: 0 16px 2px 32px;
        transition-property: border, padding;
        transition-duration: 0.15s;
        transition-timing-function: ease-in;
        color: var(--veryDarkBlue);
    }

    textarea {
        resize: none;
        display: block;

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

    input:hover,
    textarea:hover {
        border-bottom-width: 3px;
        padding-bottom: 0;
    }

    ${({ fieldHasError }) =>
        fieldHasError &&
        css`
            label {
                color: var(--red);
            }

            input,
            textarea {
                color: var(--red);
                border-bottom-color: var(--red);
            }

            input::placeholder,
            textarea::placeholder {
                color: var(--red);
            }
        `}
`;

const Label = styled(Paragraph)``;

const ButtonSubmit = styled(ButtonTemplate)`
    display: grid;
    place-items: center;
    padding: 0;
    width: 80px;
    height: 80px;
    margin-left: auto;
`;

export default ContactForm;
