import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { WrapperWithoutMobilePadding } from './../styles/style-template';

function LeafletMap({ officeLocation }) {
    const setMarker = (markerData) => {
        if (markerData) {
            const { coordinates, officeTitle, email, phoneNr, address } =
                markerData;
            const { location, city, postCode } = address;
            return (
                <Marker
                    position={coordinates}
                    eventHandlers={{
                        click: () => {},
                    }}
                >
                    <Popup>
                        <ContactWrapper>
                            <p>{officeTitle}</p>
                            <p>Email: {email}</p>
                            <p>
                                Address: {location}, {city} {postCode}
                            </p>
                            <a href={'tel:+' + phoneNr}>Phone: {phoneNr}</a>
                        </ContactWrapper>
                    </Popup>
                </Marker>
            );
        }

        return null;
    };

    return (
        <WrapperWithoutMobilePadding as='div'>
            <MapContainerUpdated
                center={[55.952, -3.19]}
                zoom={12}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {setMarker(officeLocation)}
            </MapContainerUpdated>
        </WrapperWithoutMobilePadding>
    );
}

const MapContainerUpdated = styled(MapContainer)`
    width: 100%;
    height: 500px;
`;

const ContactWrapper = styled.div`
    p:first-child {
        margin-bottom: 1rem;
    }

    p,
    a {
        margin: 0;
        color: var(--darkGrey);
        font-size: 1rem;
        line-height: 20px;
        text-decoration: none;
        font-weight: var(--fontWeight-500);
    }
`;

export default LeafletMap;
