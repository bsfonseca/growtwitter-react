import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;
    border: 1px solid #d6d3d3;

    max-width: 1000px;

    #left {
        min-width: 180px;
    }

    #right {
        min-width: 100px;
    }
`;
