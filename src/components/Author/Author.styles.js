import styled from "styled-components"

export const Wrapper = styled.div`
    width: 40%;
    margin: 10% auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: .2s all;

    *{
        margin: 0;
    }

    h2{
        color: #4F4F4F;
        margin-bottom: .5rem;
    }

    p{
        color: #828282;
    }

    i{
        color: white;
    }

    :hover{
        background: #333333;
        cursor: pointer;
    }

    .white{
        color: #f2f2f2;
    }

    .black{
        color: #4f4f4f;
    }

    
    @media (max-width: 320px){
        width: 70%;
    }
`