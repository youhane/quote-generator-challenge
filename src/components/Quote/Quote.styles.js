import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    margin: 10.5% 0;

    div{
        background: #F7DF94;
        width: 7px;
        height: 10rem;
    }

    h1{
        font-weight: 500;
        width: 40%;
    }

    @media (max-width: 320px){
        font-size: .75rem;
        margin-top: 5rem;

        h1{
            width: 70%;
        }
    }
`