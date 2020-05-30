import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BlurPage = styled.div`
    position: fixed;
    width: 110%;
    height: 110%;
    filter: blur(20px);
    background-image: url('https://c4.wallpaperflare.com/wallpaper/785/459/763/neon-city-drawing-wallpaper-preview.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 10px;
    height: 600px;
    width: 400px;
`;

export const Title = styled.div`
    font-size: 28px;
    margin-bottom: 20px;
    letter-spacing: 2px;
`;
export const Logo = styled.img`
    height: 60px;
    width: 60px;
`;

export const InputForm = styled.div`
    margin: 15px;
`;

export const LoginButton = styled.button`
    height: 50px;
    width: 95%;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0);
    color: #349ba3;
    border: 4px solid #349ba3;
    border-radius: 2px;
    cursor: pointer;
`;

export const TextInput = styled.input`
    height: 35px;
    width: 95%;
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;        
    color: white;
    padding: 5px;
`;

export const RegisterButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: white;
    a {
        color: white;
        text-decoration: none;
    }
`;
