import styled from "styled-components";
import logo from "../assets/logo_growtweet.svg";

const HeaderStyled = styled.div``;

export function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo Growtwitter" />
        </HeaderStyled>
    );
}
