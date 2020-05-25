import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 20px 20px 0px 20px;
    background-color: #16161e;
    height: 100vh;
`;

export const Title = styled.span`
    padding: 30px;
    font-size: 2rem;
    color: white;
`;

export const VideoCard = styled.div`
    position: relative;
    cursor: pointer;
`;

export const VideoBanner = styled.img`
    height: 240px;
    width: 90%;
    border-radius: 15px;
`;

export const VideoTitle = styled.div`
    padding-left: 25px;
    text-align: left;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
`;

export const VideoInfo = styled.div`
    padding-left: 25px;
    display: flex;
    flex-direction: row;
`;

export const VideoDuration = styled.div`
    position: absolute;
    top: 10px;
    right: 25px;
    margin-right: 10px;
    font-size: 10px;
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
`;
