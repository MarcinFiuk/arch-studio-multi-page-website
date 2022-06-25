import styled from 'styled-components';
import { useId } from 'react';

import {
    HeadingM,
    ButtonTemplate,
    Paragraph,
} from './../styles/style-template';
import IconArrow from './icons/IconArrow';

function ContactForm() {
    const nameId = useId();
    const emailId = useId();
    const messageId = useId();

    return (
        <Wrapper>
            <HeadingM as='h2' color='var(--veryDarkBlue)'>
                Connect with us
            </HeadingM>
            <form>
                <FormChildWrapper>
                    <Paragraph
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={nameId}
                    >
                        Name:
                    </Paragraph>
                    <input id={nameId} name='name' placeholder='type name' />
                </FormChildWrapper>
                <FormChildWrapper>
                    <Paragraph
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={emailId}
                    >
                        Email:
                    </Paragraph>
                    <input id={emailId} name='email' placeholder='type email' />
                </FormChildWrapper>
                <FormChildWrapper>
                    <Paragraph
                        as='label'
                        fontWeight='var(--fontWeight-700)   '
                        htmlFor={messageId}
                    >
                        Message:
                    </Paragraph>
                    <textarea
                        id={messageId}
                        rows='3'
                        name='message'
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

const Wrapper = styled.section``;

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
        padding-inline: 0.75rem;
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
