import React, { useState} from 'react';
import ItemList from './ItemList/ItemList';
import InputItem from './InputItem/InputItem';
import Footer from './Footer/Footer';
import styles from './Todo.module.css';
import { Container } from '@material-ui/core';

const Todo = () => {
    const InitialState = {
      items: [
        {
          value: 'CREATE NEW APP',
          isDone: false,
          id: 1
        },
        {
          value: 'INSERT PROPS',
          isDone: false,
          id: 2
        },
        {
          value: 'DO ALL TASKS',
          isDone: false,
          id: 3
        }
      ]
    };

    const [itemsTodo, setItemsTodo] = useState(InitialState.items);
    const [itemId, setIdemId] = useState(InitialState.items.length);

    const onClickDone = (id) => {
      const newItemList = InitialState.items.map(item => {
        const newItem = { ...item };
        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }
        return newItem;
      });
        setItemsTodo({ items: newItemList });
    };

    const onClickDelete = (id) => {
      const newItemList = this.state.items.filter(item => item.id !== id);
      this.setState(() => ({
        items: newItemList
      }));
    };

    const onClickAdd = (value) => {
      this.setState((state) => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: this.itemId += 1
          }
        ]
      }));
    };
      const { items } = this.state;
      const itemsDone = items.filter((el) => el.isDone).length;
      const itemsTodo = items.length - itemsDone;

      return (
            <Container className={styles.wrap}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}> TO-DO LIST:</h1>
                    <InputItem
                        items={this.state.items}
                        onClickAdd={this.onClickAdd}
                    />
                    <div>
                        <ItemList
                            items={this.state.items}
                            onClickDone={this.onClickDone}
                            onClickDelete={this.onClickDelete}
                        />
                    </div>
                    <Footer
                        itemsTodo={itemsTodo}
                        itemsDone={itemsDone}
                    />
                </div>
            </Container>
      );
    }
}


export default Todo;