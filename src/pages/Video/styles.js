import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 40px;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    color: white;
    font-weight: 200;
`;

export const VideoInfo = styled.div`
    position: relative;
    margin: 10px 10px 10px 10px;
    padding-bottom: 20px;
    border-bottom: 0.2px solid white;
`;

export const VideoViews = styled.div`
    font-size: 1rem;
    color: ghostwhite;
    padding-top: 10px;
`;

export const ChannelInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 10px;
`;

export const ChannelName = styled.div`
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    padding: 10px 0px 0px 10px;
    cursor: pointer;
`;

export const ChannelLogo = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    cursor: pointer;
`;

export const DateVideo = styled.div`
    position: absolute;
    bottom: 10px;
    left: 70px;
    font-size: 1rem;
    color: ghostwhite;
`;

export const RecommendButton = styled.button`
    position: absolute;
    top: 10px;
    right: 210px;
    height: 30px;
    width: 200px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    font-size: 14px;
    color: white;
    border: 1px solid white;
    padding: 5px;    
    cursor: pointer;
`;

export const SubscribeButton = styled.button`
    position: absolute;
    right: 0px;
    top: 10px;
    height: 30px;
    width: 200px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    font-size: 14px;
    color: red;
    border: 1px solid red;
    padding: 5px;    
    cursor: pointer;  
`;

export const Description = styled.div`
    font-size: 1rem;
    color: white;
    width: 75%;
    margin: 10px 40px 0px 80px;
`;

export const RelatedVideoName = styled.div`
    color: white;
    font-size: 1.4rem;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const RelatedVideoCard = styled.div`
    position: relative;
    border-radius: 15px;
    margin-left: 20px;
    margin-bottom: 80px;
    cursor: pointer;
`;

export const RelatedVideoBanner = styled.img`
    width: 100%;
    max-width: 360px;
    max-height: 240px;
    border-radius: 10px;
`;

export const RelatedVideoTitle = styled.div`
    font-size: 1rem;
    position: absolute;
    color: white;
`;

export const RelatedVideoInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: absolute;
    color: white;
    bottom: -40px;
`;

export const RelatedVideoChannel = styled.div`        
    font-size: 12px;
    width: 50%;
`;

export const RelatedVideoViews = styled.div`
    text-align: right;
    font-size: 12px;
    width: 50%;
`;
