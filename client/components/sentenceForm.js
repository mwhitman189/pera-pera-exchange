import { useState } from 'react';
import styled from 'styled-components';
import useInputState from '../../hooks/useInputState';
import InputWrapper from './templates/InputWrapper';


const Container = styled.div`

`;

const Form = styled.form`

`;

const SentenceInput = styled.input`

`;

const SubmitBtn = styled.button`
    
`;

export default function SentenceForm({ className }) {
    const [ sentence, setSentence, resetSentence ] = useInputState("");
    const [ errors, setErrors ] = useState({});

    const handleSubmit = () => {
        if (sentence === "") {
            setErrors((prevState) => ({ ...prevState, sentenceError: "Please enter a valid sentence" }));
        }
    };

    return (
        <Container className={className}>
            <Form onSubmit={handleSubmit}>
                <InputWrapper label="Your sentence:" error={errors.sentenceError}>
                    <SentenceInput />
                </InputWrapper>

                <SubmitBtn type='submit'>Submit</SubmitBtn>
            </Form>
        </Container>
    );
}
