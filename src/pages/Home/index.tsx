import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Select } from '@/components/Select'
import { Button } from '@/components/Button'
import searchIcon from '@/assets/icons/search.svg'
import logo from '@/assets/icons/logo.svg'
import banner from '@/assets/icons/banner.svg'

import { Body, Container, Content, Header, Search } from './styles'
import { api } from '@/services/http'
import { useCitys, useStates } from '@/hooks/use-location'

export function Home() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const states = useStates()
  const citys = useCitys(state)

  const navigate = useNavigate()

  function handleSearchPets() {
    const queryParams = new URLSearchParams({
      state,
      city,
    })
    navigate(`/map?${queryParams.toString()}`)
  }

  async function handleChangeState(e: any) {
    setState(e.target.value)  
  }

  function handleChangeCity(e: any) {
    setCity(e.target.value)
  }

  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Logo Find A Friend" />
          <span>FindAFriend</span>
        </Header>
        <Body>
          <h1>
            Leve <br /> a felicidade <br /> para o seu lar
          </h1>
          <img src={banner} alt="banner" />
        </Body>
        <Search>
          <span>
            Encontre o animal de estimação ideal <br /> para seu estilo de vida!
          </span>
          <div>
            <p>Busque um amigo: </p>
            <Select
              label=""
              name="UF"
              options={states}
              onChange={handleChangeState}
            />
            <Select
              label=""
              name="Cidade"
              options={citys}
              onChange={handleChangeCity}
            />
            <Button onClick={handleSearchPets} disabled={!state || !city}>
              <img src={searchIcon} alt="" />
            </Button>
          </div>
        </Search>
      </Content>
    </Container>
  )
}
