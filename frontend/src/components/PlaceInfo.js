import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import PostDetail from "./view";

export default function PlaceInfo({ pins }) {
  console.log(pins);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  return (
    <>
      {pins.map((marker) => (
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
        />
      ))}
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
