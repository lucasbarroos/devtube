import styled from 'styled-components';

export const Container = styled.div`
    padding: 120px 40px 40px 40px;
`;

export const FormBanner = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

export const FormVideos = styled.div`
    margin: 40px;
    @media only screen and (max-width: 900px) {
        margin: 0px;
    }    
`;

export const Banner = styled.img`
    max-width: 100%;
    max-height: 240px;
`;

export const Picture = styled.img`
    margin-top: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const Title = styled.div`
    margin-top: 10px;
    font-size: 48px;
    color: white;   
    @media only screen and (max-width: 900px) {        
        font-size: 26px;
        width: 100%;
        text-align: center;
    }
`;

export const Subscribeds = styled.div`
    font-size: 20px;
    color: white;
    @media only screen and (max-width: 900px) {        
        font-size: 14px;
        margin-bottom: 30px;
        width: 100%;
        text-align: center;
    }
`;

export const SubscribeButton = styled.button`
    height: 30px;
    width: 200px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.active ? 'white' : 'red')};
    font-size: 14px;
    color: ${(props) => (props.active ? 'black' : 'white')};
    border: 1px solid ${(props) => (props.active ? 'white' : 'red')};
    padding: 5px;    
    cursor: pointer;  
`;
