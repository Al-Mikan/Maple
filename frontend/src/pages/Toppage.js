import styles from "../styles/Toppage.module.css";
import View from "../components/view"
import GoogleMap from "../components/Googlemap";
import Position from "../components/position"

const Toppage = () => {
  return (
  <div className={styles.Toppagewrapper}>

    <View />
    <GoogleMap />
    <Position/>

  </div>


  );
}

export default Toppage;
