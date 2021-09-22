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
  Lorem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  

  return (
    <div>
      <Button  className={styles.post} colorScheme="red" onClick={onOpen}>
        <span>+</span>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <input type="file" id="example" accept="image/jpeg, image/png" />
          </ModalBody>
          <ModalBody>
            <Text mb="8px">コメント</Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="ここにコメントを書いてね！"
              size="md"
            />
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <Button variant="ghost"> 保存</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Post;
