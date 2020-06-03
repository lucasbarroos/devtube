import styled from 'styled-components';

export const VideoForm = styled.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 20px; 
    @media only screen and (max-width: 900px) {    
        margin-bottom: 40px; 
    }
`;

export const VideoBanner = styled.img`
    height: 240px;
    width: 90%;
    border-radius: 15px;    
    @media only screen and (max-width: 900px) {
        height: auto;
    }
`;

export const VideoTitle = styled.div`
    padding-left: 25px;
    text-align: left;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none !important;     
    @media only screen and (max-width: 900px) {
        font-size: 14px;
        padding-left: 0px;
        width: 100%;
    }
`;

export const VideoInfo = styled.div`
    padding-left: 25px;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 900px) {
        font-size: 12px;
        padding-left: 0px;
    }
`;

export const VideoDuration = styled.div`
    position: absolute;
    top: 10px;
    right: 25px;
    margin-right: 10px;
    font-size: 12px;
    color: white;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    background-color: #2c2c32;
`;

export const VideoChannel = styled.div`
    padding-left: 25px;
    text-align: left;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    text-decoration: none !important;
`;
