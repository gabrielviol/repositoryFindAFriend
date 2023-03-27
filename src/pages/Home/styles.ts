import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  padding: 120px 48px;
  width: 100%;
  max-width: calc(1216px + 96px);
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    font-size: 25px;
    font-weight: bolder;
  }
`
export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h1 {
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

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
