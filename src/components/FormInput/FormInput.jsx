import styles from './FormInput.module.css';

function FormInput({placeholder, value, onChange, ref}) {

    return (
        <div className={styles['input-container']}>   
          <input ref={ref} className={styles['input']} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}

export default FormInput;