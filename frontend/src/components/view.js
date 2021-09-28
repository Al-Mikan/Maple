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
import { FaHeart } from "react-icons/fa";
import styles from "../styles/modal_view.css";
import picture from "../assets/star5.jpg";
import { favorite } from "../utils";
import { useState, useEffect } from "react";

function PostDetail({ isOpen, onOpen, onClose, post }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [isOpen]);

  function handleFavorite() {
    favorite(post.id);
    setCount(count + 1);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <img className={styles.picture} src={post.imagePath} />
          </ModalBody>
          <ModalBody>
            <Text>{post.comment}</Text>
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <Button variant="ghost" onClick={handleFavorite}>
              <FaHeart /> {post.favorites + count}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostDetail;
