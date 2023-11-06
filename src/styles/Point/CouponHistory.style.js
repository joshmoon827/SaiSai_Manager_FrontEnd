import styled from "styled-components";

export const Table = styled.table`
    font-family: 'pretendard', sans-serif; 
    text-align: center;
    border-collapse: separate;
    border-spacing: 3rem; 
    
    thead{
        font-size: small;
        color:gray;
        text-align:left;
        font-weight:400;
    }
`

export const Td = styled.td`
    font-weight:bold;
`

export const Tr = styled.tr`
`

export const Div = styled.div`

    width: 100px;
    height: 20px;
    background-color: ${(props) => props.isSelected ? "#FF6362" : "gray"};
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
