import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

const InputItem = () => (
    <div className={styles.input}>
        <TextField
            id="filled-basic"
            label="ADD NEW TASK HERE"
            variant="filled"
            className={styles.input}/>
        <Button
            href='#'
            variant="outlined"
            size="large">
            Add
        </Button>
    </div>
    );

export default InputItem;