import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 40px;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    color: white;
    font-weight: 200;
    width: 50%;
    @media only screen and (max-width: 1116px) {
        font-size: 18px;
        width: 100%;
    }
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
    @media only screen and (max-width: 1116px) {
        font-size: 12px;
    }
`;

export const ChannelInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 10px;
    color: white;
    text-decoration: none !important;
`;

export const ChannelName = styled.div`
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    padding: 10px 0px 0px 10px;
    cursor: pointer;
    @media only screen and (max-width: 1116px) {
        font-size: 14px;
    }
`;

export const ChannelLogo = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    cursor: pointer;
`;

export const DateVideo = styled.div`
    position: absolute;
    bottom: 20px;
    left: 70px;
    font-size: 1rem;
    color: ghostwhite;
    @media only screen and (max-width: 1116px) {
        font-size: 12px;
    }
`;

export const RecommendButton = styled.button`
    position: absolute;
    top: 10px;
    right: 210px;
    height: 30px;
    width: 200px;
    border-radius: 5px;
    background-color: ${(props) => (props.active ? 'white' : 'rgba(0, 0, 0, 0)')};
    font-size: 14px;
    color: ${(props) => (props.active ? 'black' : 'white')};
    border: 1px solid white;
    padding: 5px;    
    cursor: pointer;    
    @media only screen and (max-width: 1116px) {
        margin-top: 10px;
        position: relative;
        top: 0px;
        right: 0px;
        width: 100%;
    }
`;

export const SubscribeButton = styled.button`
    position: absolute;
    right: 0px;
    top: 10px;
    height: 30px;
    width: 200px;
    border-radius: 5px;
    background-color: ${(props) => (props.active ? 'red' : 'rgba(0, 0, 0, 0)')};
    font-size: 14px;
    color: ${(props) => (props.active ? 'white' : 'red')};
    border: 1px solid red;
    padding: 5px;    
    cursor: pointer;   
    @media only screen and (max-width: 1116px) {
        margin-top: 10px;
        position: relative;
        top: 0px;
        right: 0px;
        width: 100%;
    }
`;

export const Description = styled.div`
    font-size: 1rem;
    color: white;
    width: 75%;
    margin: 10px 40px 0px 80px;
    @media only screen and (max-width: 1116px) {
        margin: 10px 10px 10px 10px;
        width: 100%;
        font-size: 12px;
    }
`;

export const RelatedVideoName = styled.div`
    color: white;
    font-size: 1.4rem;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 40px;
    @media only screen and (max-width: 1116px) {
        margin-top: 40px;
        font-size: 1.2rem;
        text-align: center;
    }
`;

export const RelatedVideoCard = styled.div`
    position: relative;
    border-radius: 15px;
    margin-left: 20px;
    margin-bottom: 80px;
    cursor: pointer;
    @media only screen and (max-width: 1116px) {
        margin-bottom: 20px;
    }
`;

export const RelatedVideoBanner = styled.img`
    width: 100%;
    max-width: 360px;
    height: 200px;
    border-radius: 10px;
`;

export const RelatedVideoTitle = styled.div`
    font-size: 1rem;
    color: white;
    text-decoration-line: none !important;
    @media only screen and (max-width: 1116px) {
        text-align: center;
        position: relative;
        font-size: 18px;
    }
`;

export const RelatedVideoInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: white;
    bottom: -40px;
    @media only screen and (max-width: 1116px) {
        bottom: auto;
        display: block;
        font-size: 10px;
        position: relative;
    }
`;

export const RelatedVideoChannel = styled.div`        
    font-size: 12px;
    width: 60%;
    @media only screen and (max-width: 1116px) {
        width: 100%;
        text-align: center;
    }
`;

export const RelatedVideoViews = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
    text-align: right;
    font-size: 12px;
    width: 50%;
    font-weight: bold;
`;
