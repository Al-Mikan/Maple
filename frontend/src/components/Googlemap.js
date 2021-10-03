import React, { useCallback, useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlaceInfo from "./PlaceInfo";
import { getAllPosts } from "../utils";
import { Spinner } from "@chakra-ui/react";
import "../styles/modal_view.css";
import PostButton from "./post";
import Header from "./header";
import Footer from "./footer";
// import mapStyles from "./mapUtils/mapStyles";
// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};
// 地図の大きさを指定します。

const options = {
  //   styles: mapStyles,
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true,
};

export default function GoogleMapComponent() {
  const [pins, setPins] = useState([]);
  const [load, setLoad] = useState(true);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBD6NxRqB5cqcDexWejFUubgObA54SwB54",
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  // API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  useEffect(() => {
    if (isLoaded) {
      getAllPosts().then((data) => {
        setPins(data.data);
        setLoad(false);
      });
    }
  }, [isLoaded]);

  if (loadError) {
    alert("error while loading google map.");
    return <p>error while loading google map.: {loadError.toString()}</p>;
  }
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      className="GoogleMap"
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={7} // デフォルトズーム倍率を指定します。
      center={{
        lat: 43.048225,
        lng: 141.49701,
      }} // 札幌周辺にデフォルトのセンターを指定しました。
      options={options}
      onLoad={onMapLoad}
    >
      <Header />
      <PlaceInfo pins={pins} />
      <Footer />

      {load && (
        <Spinner
          className="loadingIcon"
          size="xl"
          thickness="4px"
          speed="0.9s"
          emptyColor="gray.200"
          color="orange.500"
        />
      )}
      <PostButton />
    </GoogleMap>
  );
}
