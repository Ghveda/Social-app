import styled from 'styled-components';


export const verificationStyle = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: ${props=>(
        props.textAlign==='false'? "center":
            ""
        )};
    `;