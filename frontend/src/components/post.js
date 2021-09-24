import styles from "../styles/post.module.css";

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
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { getPosition, postToServer } from "../utils";

const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = useState("");
  let [value2, setValue2] = useState("");
  let [lat, setLat] = useState("");
  let [lng, setLng] = useState("");
  const imageRef = useRef();

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
    const res = await postToServer("おれ", value, lat, lng, imageRef.current);
  };

  return (
    <div>
      <Button className={styles.post} colorScheme="red" onClick={position}>
        <span>+</span>
      </Button>
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
            />
          </ModalBody>
          <ModalBody>
            <Text mb="8px">コメント</Text>
            <Textarea
              onChange={handleInputChange}
              value={value}
              placeholder="ここにコメントを書いてね！"
              size="md"
            />
          </ModalBody>
          <ModalCloseButton />
          <ModalFooter>
            <Button variant="ghost" onClick={handlePost}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Post;
