import { Body, Container, Content, Header, Search } from './styles'
import logo from '../../assets/icons/logo.svg'
import banner from '../../assets/icons/banner.svg'
import { Select } from '@/components/Select'

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
        <h1>Leve <br/> a felicidade <br/> para o seu lar</h1>
        <img src={banner} alt="banner" />
      </Body>
      <Search>
        <span>Encontre o animal de estimação ideal <br/> para seu estilo de vida!</span>
        <div>
          <p>Busque um amigo: </p>
          <Select label='Estado' name='Estado' options={[{label: 'a', value: 1}, {label: 'b', value: 2}, {label: 'c', value: 3}]} />
        </div>
      </Search>
    </Content>
  </Container>
}
