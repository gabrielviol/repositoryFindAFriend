import Leaflet from 'leaflet'
import { useParams } from "react-router-dom";
import { useState } from "react";

import { useCoordinates } from "@/hooks/use-location";
import { usePetGallery, usePetRequirements, usePetsDetail } from "@/hooks/use-pet";

import mapMarker from '@/assets/icons/map-marker.svg'
import { Sidebar } from "@/components/Sidebar";

import { Container, Content, Header } from "./styles";
import { energyRecord } from '@/constant/pet-record';

type PetProfileParams = {
    id: string
}

const MapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [64, 72],
    iconAnchor: [32, 72],
    popupAnchor: [0, -72]
})

export function PetProfile() {
    const params = useParams<PetProfileParams>()

    const petDetail = usePetsDetail(params.id)
    const petImage = usePetGallery(params.id)
    const requirements = usePetRequirements(params.id)
    const coordinates = useCoordinates(petDetail?.org.cep)
    const [imageSelected, setImageSelected] = useState<string>(
        petDetail.photo_url,
    )

    return (
        <Container>
            <Sidebar />
            <Content>
                <Header>
                    <p>Seu novo melhor amigo</p>
                </Header>
                <ProfileContainer>
                    <SectionImages>
                        <Banner>
                            <img src={imageSelected || petDetail.photo_url} alt={petDetail.name} />
                        </Banner>
                        <ImageList>
                            {petImages.map((image) => (
                                <ImageListItem
                                    key={image.id}
                                    onClick={() => setImageSelected(image.photo_url)}
                                >
                                    <img
                                        src={image.photo_url}
                                        alt=""
                                        className={
                                            imageSelected
                                                ? imageSelected === image.photo_url
                                                    ? 'active'
                                                    : ''
                                                : petImages.at(0)?.photo_url === image.photo_url
                                                    ? 'active'
                                                    : ''
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </SectionImages>

                    <SectionPet>
                        <h1>{petDetail.name}</h1>
                        <p>{petDetail.description}</p>
                        <CharacteristicsList>
                            <RateCard
                                initialRate={energyRecord[petDetail?.energy]?.valueAsNumber}
                                maxRate={5}
                                label={energyRecord[petDetail?.energy]?.label}
                                rateOffSymbol={boltDuotone}
                                rateOnSymbol={boltOutline}
                            />
                            <RateCard
                                initialRate={1}
                                maxRate={1}
                                label={'Ambiente amplo'}
                                rateOffSymbol={maximize}
                                rateOnSymbol={maximize}
                            />
                            <RateCard
                                initialRate={sizeRecord[petDetail?.size]?.valueAsNumber}
                                maxRate={3}
                                label={sizeRecord[petDetail?.size]?.label}
                                rateOffSymbol={circleDuotone}
                                rateOnSymbol={circleFill}
                            />
                        </CharacteristicsList>
                        
                        <SectionPet />
                </ProfileContainer>
            </Content>
        </Container>
    )
}