import AddIcon from "../../public/assets/dashboardSVG/AddIcon";
import styles from './AddCard.module.css'

function AddCard(props) {
    return (
        <div className={styles.container}>
            <AddIcon />
            <p>{props.text}</p>
        </div>
    );
}

export default AddCard;
