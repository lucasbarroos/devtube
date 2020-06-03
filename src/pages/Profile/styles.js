import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.div`
    height: 400px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    @media only screen and (max-width: 900px) {
        width: 300px;
    }
`;

export const Picture = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    cursor: pointer;
`;

export const InputForm = styled.div`
    margin: 15px;
`;
