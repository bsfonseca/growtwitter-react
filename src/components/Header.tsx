import styled from "styled-components";
import logo from "../assets/logo_growtweet.svg";

const HeaderStyled = styled.div`
    color: red;
    padding: 20px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 120px;
    margin-bottom: 12px;
`;

export function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo Growtwitter" />
        </HeaderStyled>
    );
}
