import React, { useState,useEffect } from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";
import { useDisclosure } from "@chakra-ui/react";
import PostDetail from "./view";

export default function PlaceInfo({ pins }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    if(pins.length){

      const postId = window.location.pathname.slice(1).trim()
      console.log(postId, pins)
      const matchedPost = pins?.filter((post)=>post.id===postId)
      console.log("matchedPost", matchedPost)
      if(matchedPost.length){
        setSelected(matchedPost[0])
        onOpen()
      }
      if(postId!=="" && !matchedPost.length){
        alert("該当の投稿はないよ、残念")
      }
    }
  },[pins]) //eslint-disable-line

  const clusterStyles = [
    {
      textColor: "white",
      url: "../clusterpin.png",
      height: 500,
      width: 500,
      textSize: 100,
      className: "clusterIcon",
    },
  ];

  const options = {
    gridSize: 50,
    styles: clusterStyles,
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
          onClose={onClose}
          post={selected}
        />
      )}
    </>
  );
}
