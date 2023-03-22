import styled from 'styled-components'

export const Container = styled.div`
    background: #F15156;
;
`
export const Content = styled.div`
    padding: 7rem;
    width: 100vw;
    height: 100vh;
;
`

export const Header = styled.header`

    display: flex;
    justify-content: baseline;
    align-items: center;
    gap: 0.5rem;    
    span {
        font-size: 25px;
        font-weight: bolder;
    }
`
export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h1{
        font-family: Nunito;
        font-size: 72px;
        font-weight: 800;
        line-height: 65px;
        letter-spacing: -0.02em;
        text-align: left;
    }
    
`
export const Search = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8rem 0 0 0;
    border: 1px solid;

    span{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;  
    }
    
    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
;
`
