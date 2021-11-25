import { useState } from 'react';
import styles from './Assignment.module.css';
import Layout from '../components/shared/Layout';

function Assignment() {
    const [value, setValue] = useState(true);

    function onClick() {
    setValue(!value);
    }

    return (
    <Layout>
        <div className={value ? styles.blue : styles.red}>
        {value ? 'True에용' : 'False에용'}
        </div>
        <button onClick={onClick}>색바꾸기!</button>
    </Layout>
    );
}

export default Assignment;