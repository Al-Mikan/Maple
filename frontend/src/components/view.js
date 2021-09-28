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

function PostDetail({ isOpen, onOpen, onClose, post }) {
  console.log(post)
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <img className={styles.picture} src={post.imagePath} />
            <div className={styles.modal_text}>あああ</div>
          </ModalBody>
          <ModalBody>
            <Text>テキスト</Text>
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <Button variant="ghost">
              <FaHeart /> 10
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostDetail;
