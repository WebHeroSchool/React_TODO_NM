import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';



class InputItem extends React.Component{
    state =
        {
        inputValue: '',
        helperText: '',
        error: false,
        isExist: false,
        };


    clearInputHandler = ({items}) => {
    console.log(this.state.inputValue);

        // if ( this.state.inputValue === '' || this.state.inputValue === ' ' ){
         if(!(/^\w/.test(this.state.inputValue))){
            return this.setState({helperText: 'Insert valid text', error: true});
        }

        for(let i = 0; i < items.length; i++) {
            if(this.state.inputValue === items[i].value) {
                    this.setState({inputValue: ''});
                    return  this.setState({helperText: 'This task already exists', error: true})
                 }
            }

            this.props.onClickAdd(this.state.inputValue);

            this.setState({inputValue: ''});


    };

    render(){
         const {onClickAdd, items, isExist} = this.props;

        return (
            <div className={styles.input}>
                <TextField
                        type="text"
                        id="filled-basic"
                        label='Add new task...'
                        variant="filled"
                        className={styles.text}
                        onChange={event =>
                            this.setState(
                                { inputValue: event.target.value.toUpperCase(),
                                            error: false,
                                            helperText: '' }
                                )}
                        helperText={this.state.helperText}
                        error={this.state.error}
                        value={this.state.inputValue}
                        onSubmit={()=>this.clearInputHandler({items, onClickAdd, isExist})}
                />

                <Button
                    href='#'
                    variant="outlined"
                    size="large"
                    // className={styles.text}
                    onClick={()=>this.clearInputHandler({items, onClickAdd, isExist})}
                >
                    Add
                </Button>
            </div>
        )
    }
}


export default InputItem;