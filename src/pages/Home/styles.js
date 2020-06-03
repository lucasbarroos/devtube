import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 20px 20px 0px 20px;
    background-color: #16161e;
`;

export const Title = styled.span`
    padding: 30px;
    font-size: 2rem;
    color: white;
    @media only screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 40px;
        font-size: 24px;
        text-align: center;
    }
`;
