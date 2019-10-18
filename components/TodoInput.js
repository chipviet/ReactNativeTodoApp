import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {matchesPattern} from '@babel/types';
import uuid from 'uuid';
import TodoList from './TodoList';



export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem: false,
    };
  }

  handleChange = e => {
    // const {item} = this.props;
    e.preventDefault();
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = e => {
    //const {item} = this.props;
    e.preventDefault();
    //if (!this.state.item.trim()) return;

    let newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    let updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  handleDelete = id => {
    let filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = id => {
    let filteredItems = this.state.items.filter(item => item.id !== id);
    let selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textform}>Add Task</Text>
        <View>
          <View style={styles.textInput}>
            <TextInput
              // placeholder="Enter your works"
              //style={styles.txtInput}
              // onChangeText={text => this.setState({ item })}
              // value={this.state.items}
              placeholder="Enter your works"
              //value={item}
              onChange={this.handleChange}></TextInput>
          </View>
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            style={styles.buttonSubmit}></Button>
        </View>
        <View style={styles.containerTodoList}>
          <TodoList
            items={this.state.items}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          ></TodoList>
        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#EAEDED',
  },
  textform: {
    flex: 1,
    paddingBottom: 10,
    alignSelf: 'stretch',
    fontSize: 20,
    textShadowColor: '#000000',
    justifyContent: 'space-between',
  },
  txtInput: {
    flex: 1,
    backgroundColor: '#000000',
    height: 20,
    width: 20,
  },

  buttonSubmit: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  containerTodoList: {
    flex:5,
    height: 100,
    backgroundColor: 'skyblue',
  },
});
