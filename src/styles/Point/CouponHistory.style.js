import styled from "styled-components";

export const Table = styled.table`
    

`
export const Th = styled.th`
    gap: 50px;
`
export const Tr = styled.tr`
    width: 100%;
    height: 100%;

`
export const Div = styled.div`
    width: 100px;
    height: 20px;
    background-color: ${(props) => props.isSelected? "#FF6362" : "gray"};
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`