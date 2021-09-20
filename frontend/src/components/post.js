import styles from "../styles/post.module.css"
import { Button } from "@chakra-ui/react"


const Post = () => {
    const clicked = () => {
        alert("Clicked!!");
    }

    return <Button className={styles.post} colorScheme="red" onClick={clicked}><span>+</span></Button>
};

export default Post;
