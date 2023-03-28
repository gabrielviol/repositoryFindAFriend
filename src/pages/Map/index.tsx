import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

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
import { PetTypeSearchOptions, SearchFilters } from '@/models/pet'
import { useFetchPets } from '@/hooks/use-pet'

const INITIAL_SEARCH_FILTERS: SearchFilters = {
  age: '',
  city: '',
  energy: '',
  independence: '',
  size: '',
  type: 'all',
}


function getQueryParams(search: string){
  const searchParams = new URLSearchParams(search)
  const city = searchParams.get('city') || ''
  return { city }
}

export function Map() {
    
  const { search } = useLocation()
  const city = getQueryParams(search).city || 'Rio de Janeiro'
  const { handleSearchFilters, searchFilters } = useSearchPets()
  const  pets = useFetchPets(searchFilters)

  useEffect(() => {
    handleSearchPets({
      ...INITIAL_SEARCH_FILTERS,
      city,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSearchPets(params: Partial<SearchFilters>) {
    const type = e.target.value as PetTypeSearchOptions
    handleSearchFilters({ type })
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
          <HeaderSelect name="type" id="type" onChange={handleFilterByPetType} value={searchFilters.type}>
            <option value="all">Gatos e Cachorros</option>
            <option value="cats">Gatos</option>
            <option value="dogs">Cachorros</option>
          </HeaderSelect>
          <img src={chevron} alt="" />
        </SelectWrapper>
      </Header>
      <Display>
        {pets.map((pet) => (
          <Link key={pet.id} to={`/pet-profile/${pet.id}`}>
            <Card path={pet.photo_url} type={pet.type} name={pet.name} />
          </Link>
        ))}
        
      </Display>
    </Content>
  </Container>
)
}
