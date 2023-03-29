import { Sidebar } from "@/components/Sidebar";
import { useCoordinates } from "@/hooks/use-location";
import { usePetGallery, usePetRequirements, usePetsDetail } from "@/hooks/use-pet";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Header } from "./styles";

type PetProfileParams = {
    id: string
}

const MapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [ 64, 72 ],
    iconAnchor: [ 32, 72 ],
    popupAnchor: [ 0, -72 ]
})

export function PetProfile(){
    const params = useParams<PetProfileParams>()

    const petDetail = usePetsDetail(params.id)
    const petImage = usePetGallery(params.id)
    const requirements = usePetRequirements(params.id)
    const coordinates = useCoordinates(petDetail?.org.cep)
    const [ imageSelected, setImageSelected ] = useState<string>(
        petDetail.photo_url,
    )

    return (
        <Container>
            <Sidebar />
            <Content>
                <Header>
                    <p>Seu novo melhor amigo</p>
                </Header>
            </Content>
        </Container>
    )
}