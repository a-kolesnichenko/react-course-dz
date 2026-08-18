import styles from './FormInput.module.css';

import type { FormInputProps } from './FormInput.props';

function FormInput({placeholder, value, onChange, ref}: FormInputProps) {

    return (
        <div className={styles['input-container']}>   
          <input ref={ref} className={styles['input']} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}

export default FormInput;