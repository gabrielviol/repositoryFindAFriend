import { ChangeEvent, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import { api } from '@/services/http'
import { Card } from '~/Card'
import { Aside } from '~/Aside'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'



function getQueryParams(search: string){
  const searchParams = new URLSearchParams(search)
  const city = searchParams.get('city') || ''
  return city
}

export function Map() {
    
  const { search } = useLocation()
  const city = getQueryParams(search).city || 'Rio de Janeiro'
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    ...INITIAL_SEARCH_FILTERS,
    city,
  })
  const [pets, setPets] = useState<IPet[]>([])

  useEffect(() => {
    handleSearchPets(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSearchPets(params: Partial<SearchFilters>) {
    setFilters((state) => ({...state, ...params}))
    const {city, ...queryParamsPayload} = {...filters, ...params}
    const queryParams = new URLSearchParams({...queryParamsPayload})
    const response = await api.get<IPetResponse>(`/pets/${city}`,{
      params: queryParams,
    })
    setPets(response.data.pets)
  }

  async function handleFilterByPetType(e:ChangeEvent<HTMLSelectElement>) {
    const type = e.target.value as PetTypeSearchOptions
    await handleSearchPets({...filters, type})
  }

return (
  <Container>
    <Aside city={city} onSearchPets={handleSearchPets}/>

    <Content>
      <Header>
        <p>
          Encontre <span>{pets.length} amigos</span> na sua cidade
        </p>
        <SelectWrapper>
          <HeaderSelect name="size" id="size">
            <option value="all">Gatos e Cachorros</option>
            <option value="cats">Gatos</option>
            <option value="dogs">Cachorros</option>
          </HeaderSelect>
          <img src={chevron} alt="" />
        </SelectWrapper>
      </Header>
      <Display>
        <Card path={dog} type="dog" name="Alfredo" />
        <Card path={dog} type="cat" name="Tobia" />
        <Card path={dog} type="dog" name="Alfredo" />
        <Card path={dog} type="cat" name="Tobia" />
        <Card path={dog} type="dog" name="Alfredo" />
        <Card path={dog} type="cat" name="Tobia" />
        <Card path={dog} type="dog" name="Alfredo" />
        <Card path={dog} type="cat" name="Tobia" />
      </Display>
    </Content>
  </Container>
)
}
