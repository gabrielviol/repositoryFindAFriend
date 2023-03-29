import styled from 'styled-components'

import { hexToRgb } from '@/utils/hex-to-rgb'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    padding: 2.5rem 1rem 4rem 7rem;

    @media(max-width: 768px){
        padding-left: calc(1rem + 3rem);
        padding-right: 1rem;
    }
`

export const Content = styled.div``

export const Header = styled.header`
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;

    p{
        color: ${({theme}) => theme.colors.gray};
        font-weight: 'semibold';
        font-size: 1.125rem;
        line-height: 28px;
    }
`