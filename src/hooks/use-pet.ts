import { PetDetail, ResponsePet, ResponsePets, SearchFilters } from "@/models/pet";
import { api } from "@/services/http";
import { useCallback, useEffect, useState } from "react";

export function useFetchPets(params: Partial<SearchFilters>){
    const [ pets, setPets ] = useState<PetDetail[]>([])

    const fetchPets = useCallback(async () => {
        const { city, ...queryParamsPayload } = params
        if(!city) return
        const queryParams = new URLSearchParams({...queryParamsPayload})
        const response = await api.get<ResponsePets>(`/pets/${city}?${queryParams}`)
        setPets(response.data.pets)
    }, [params])

    useEffect(() => {
        fetchPets()
    }, [fetchPets])

    return pets
}

export function usePetsDetail(petId?: string){
    const [ petDetail, setPetDetail ] = useState<PetDetail>({} as PetDetail)

    const fetchPetDetail = useCallback(async () => {
        if(!petId) return 
        const { data } = await api.get<ResponsePet>(`/pets/show/${petId}`)
        setPetDetail(data.pet)
    }, [petId])

    useEffect(() => {
        fetchPetDetail()
    }, [petId, fetchPetDetail])

    return petDetail
}