import React, { useCallback, useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlaceInfo from "./PlaceInfo";
// import mapStyles from "./mapUtils/mapStyles";
// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const libraries = ["places"];
const mapContainerStyle = {
  height: "90vh",
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
    console.log(process.env.REACT_APP_googleMapsApiKey)
  const [pins, setPins] = useState([])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBD6NxRqB5cqcDexWejFUubgObA54SwB54",
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  useEffect(()=>{
    if(isLoaded){
      // 初手でデータの取得
      // let inputPins = ???;
      // setPinsで保存
      // setPins(inputPins);
    }
  },[isLoaded])

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={8} // デフォルトズーム倍率を指定します。
      center={{
        lat: 43.048225,
        lng: 141.49701,
      }} // 札幌周辺にデフォルトのセンターを指定しました。
      options={options}
      onLoad={onMapLoad}
    >
    <PlaceInfo/>
    </GoogleMap>
  );
}
