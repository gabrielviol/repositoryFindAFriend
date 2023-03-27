import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'
import { ChangeEvent, useState } from 'react'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

type SearchFilters = {
  age: string
  city: string
  energy: string
  size: string
  independence: string
}

interface AsideProps {
  city: string
  onSearchPets: (searchFilters: Partial<SearchFilters>) => Promise<void>
}

export function Aside({ city, onSearchPets }:AsideProps) {
  const [searchFilters, setSearchFilters] = useState({
    age: '',
    city,
    energy: '',
    size: '',
    independence: '',
  })
  async function handleSearchPets() {
    await onSearchPets(searchFilters)
  }

  async function handleChangeSearchFilters(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const { name: field, value } = e.target
    setSearchFilters((state) => ({ ...state, [field]: value }))
    await onSearchPets({ ...searchFilters, [field]: value })
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input type="text" placeholder="Insira uma cidade" />
            <button>
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select name="age" label="Idade" options={ageOptions} />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
          />

          <Select name="size" label="Porte do animal" options={sizeOptions} />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
