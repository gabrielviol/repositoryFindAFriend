import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Select } from '@/components/Select'
import { Button } from '@/components/Button'
import searchIcon from '@/assets/icons/search.svg'
import logo from '@/assets/icons/logo.svg'
import banner from '@/assets/icons/banner.svg'

import { Body, Container, Content, Header, Search } from './styles'
import { api } from '@/services/http'

interface ISelectOptions {
  value: string | number
  label: string
}

interface IState {
  nome: string
  sigla: string
}

interface ICity {
  name: string
  code: string
}

interface IResponseState {
  states: IState[]
}

interface IResponseCity {
  citys: ICity[]
}

export function Home() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [states, setStates] = useState<ISelectOptions[]>([])
  const [citys, setCitys] = useState<ISelectOptions[]>([])

  const navigate = useNavigate()

  function handleSearchPets() {
    const queryParams = new URLSearchParams({
      state,
      city,
    })
    navigate(`/map?${queryParams.toString()}`)
  }

  async function handleChangeState(e: any) {
    const newState = e.target.value
    setState(newState)
    const { data } = await api.get<IResponseCity>(`/location/citys/${newState}`)
    const dataMapped = data.citys
      .map((city) => ({
        label: city.name,
        value: city.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
    setCitys(dataMapped)
  }

  function handleChangeCity(e: any) {
    setCity(e.target.value)
  }

  useEffect(() => {
    const loadStates = async () => {
      const { data } = await api.get<IResponseState>('/location/states')
      const dataMapped = data.states
        .map((state) => ({
          label: state.sigla,
          value: state.sigla,
        }))
        .sort((a, b) => a.label.localeCompare(b.label))
      setStates(dataMapped)
    }
    loadStates()
  }, [])

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
