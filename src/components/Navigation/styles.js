import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #16161e;
    width: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 50px 10px 0px;
    width: 10%;
`;

export const Logo = styled.img`
    cursor: pointer;
    height: 40px;
`;

export const SearchContainer = styled.div`
    position: relative;
    margin: 15px 20px 0px 20px;
    width: 40%;
`;

export const Search = styled.input`
    height: 36px;
    width: 100%;
    background-color: #2c2c32;
    border: 1px solid #2c2c32;
    font-size: 15px;
    color: white;
    border-radius: 20px;
    padding-left: 20px;
`;

export const SearchIcon = styled.img`
    position: absolute;
    height: 36px;
    width: 36px;
    top: 0px;
    right: -15px;
    background-color: rgba(0, 0, 0 , 0);
    transform: rotateY(180deg);
    cursor: pointer;
`;

export const ItemForm = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
`;

export const Item = styled.div`
    font-size: 1.6rem;
    color: white;
    margin: 20px;
    cursor: pointer;
`;

export const PanelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40%;
    font-size: 1.2rem;
    color: white;
    padding-top: 20px;
`;

export const PanelPicture = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 40px;
`;

export const PanelItem = styled.div`
    width: 60px;
    height: 60px;
`;
