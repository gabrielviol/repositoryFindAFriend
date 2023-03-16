import { Body, Container, Content, Header, Search } from './styles'
import logo from '../../assets/icons/logo.svg'
import banner from '../../assets/icons/banner.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return <Container>
    <Content>
      <Header>
        <img src={logo} alt="Logo Find A Friend" />
        <span>FindAFriend</span>
      </Header>
      <Body>
        <h1>Leve a felicidade para seu lar</h1>
        <img src={banner} alt="banner" />
      </Body>
      <Search>
        <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        <div>
          <p>Busque um amigo: </p>
        </div>
      </Search>
    </Content>
  </Container>
}
