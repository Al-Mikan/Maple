import React, { useState } from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";
import { useDisclosure } from "@chakra-ui/react";
import PostDetail from "./view";

export default function PlaceInfo({ pins }) {
  console.log(pins);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  const clusterStyles = [
    {
      textColor: "black",
      url: "../clusterpin.png",
      height: 50,
      width: 50,
    },
  ];

  const options = {
    gridSize: 50,
    // styles: clusterStyles,
    maxZoom: 15,
  };

  return (
    <>
    <MarkerClusterer options={options}>
      {(clusterer) =>
        pins.map((marker) => (
          <Marker
            key={marker.id}
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            onClick={() => {
              setSelected(marker);
              onOpen();
            }}
            clusterer={clusterer}
          />
        ))
      }
    </MarkerClusterer>
      {selected && (
        <PostDetail
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          post={selected}
        />
      )}
    </>
  );
}
