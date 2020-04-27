import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
    state =
        {
          inputValue: '',
          helperText: '',
          error: false,
          isExist: false
        };


    clearInputHandler = ({ items }) => {
      for (let i = 0; i < items.length; i += 1) {
        if (this.state.inputValue.test([/'',' '/gm])) {
          this.setState({ inputValue: '' });
          return this.setState({ helperText: 'This field is required', error: true });
        } if (this.state.inputValue === items[i].value) {
          this.setState({ inputValue: '' });
          return this.setState({ helperText: 'This task already exists', error: true });
        }
      }

      this.props.onClickAdd(this.state.inputValue);

      return this.setState({ inputValue: '' });
    };

    render() {
      const { onClickAdd, items, isExist } = this.props;

      return (
            <div className={styles.input}>
                <TextField
                    type="text"
                    id="filled-basic"
                    label="ADD NEW TASK HERE"
                    variant="filled"
                    className={styles.input}
                    onChange={event => this.setState(
                      {
                        inputValue: event.target.value.toUpperCase(),
                        error: false,
                        helperText: ''
                      }
                    )}
                    helperText={this.state.helperText}
                    error={this.state.error}
                    value={this.state.inputValue}
                />
                <Button
                    href='#'
                    variant="outlined"
                    size="large"
                    onClick={()=>this.clearInputHandler({ items, onClickAdd, isExist })}
                >
                    Add
                </Button>
            </div>
      );
    }
}


export default InputItem;