import "../styles/modal_view.css";
import { BsPencil } from "react-icons/bs";
import React from "react";
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
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { getPosition, postToServer } from "../utils";

const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState("");
  let [lat, setLat] = useState("");
  let [lng, setLng] = useState("");
  const imageRef = useRef();
  const [load, setLoad] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  let handleInputChange = (e) => {
    console.log(e);
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const position = () => {
    onOpen();
    console.log("OK");
    getPosition().then((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  const handlePost = async () => {
    console.log("postするぞ");
    setLoad(true);
    console.log(value, lat, lng);
    await postToServer("おれ", value, lat, lng, imageRef.current);
    setLoad(false);
    onClose();
    setFileUrl(null);
  };

  const handlePreview = async (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  return (
    <div>
      <Button
        rightIcon={
          <span className="pencilIcon">
            <BsPencil size={25} />
          </span>
        }
        position={"absolute"}
        color="#d47c3c"
        className="postButton"
        onClick={position}
        p={9}
        fontSize={25}
        borderRadius={50}
        bottom={"40px"}
        right={"65px"}
        // boxShadow={"2px 2px grey"}
        boxShadow={"lg"}
        transition="0.4s"
        width="20px"
        _hover={{ color: "white", bgColor: "#d47c3c" }}
      ></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <input
              type="file"
              id="example"
              ref={imageRef}
              required
              accept="image/jpeg, image/png"
              onChange={handlePreview}
            />
            <img src={fileUrl} alt={fileUrl}/>
          </ModalBody>
          <ModalBody>
            <Text mb="8px">コメント</Text>
            <Textarea
              onChange={handleInputChange}
              value={value}
              placeholder="ここにコメントを書いてね！"
              size="md"
            />
            {load && (
              <Spinner
                className="loadingIcon"
                size="xl"
                thickness="4px"
                speed="1.0s"
                emptyColor="grey.200"
                color="orange.500"
              />
            )}
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button variant="ghost" onClick={handlePost} isDisabled={load}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Post;
