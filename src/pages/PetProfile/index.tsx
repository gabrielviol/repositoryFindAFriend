import { useCoordinates } from "@/hooks/use-location";
import { usePetGallery, usePetRequirements, usePetsDetail } from "@/hooks/use-pet";
import { useState } from "react";
import { useParams } from "react-router-dom";

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