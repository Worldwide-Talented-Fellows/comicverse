import styles from '../styles/button.module.css';

const Button = ({ btntype, placeholderText, disable }) => {
    // How to use
    // Btntype: Primary, Secondary, Tertiary
    // placeholder text: Text you want button to display.
    // disable: If false or falsey values are passed into disable it will be false and vice versa for true.

    return (
        <button type="button"
            className={`${styles.Button} 
            ${styles[`${btntype}`]} 
            ${disable ? styles.Disabled : ""}`
            }>
            {placeholderText}
        </button>
    );
};

export default Button;
