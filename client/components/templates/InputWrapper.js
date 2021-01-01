import styled from 'styled-components';


const InputLabel = styled.label`
    color: ${({ color }) => color ? color : inherit};
`;

const Error = styled(Label)`
    color: ${({ errorColor }) => errorColor ? errorColor : inherit};
`;

export default function InputWrapper({ label, error, children }) {
    return (
        <>
            <InputLabel htmlFor={children.id}>
                {error ? <Error>{error}</Error> : <Label>{label}</Label>}
            </InputLabel>
            {children}
        </>
    );
}
