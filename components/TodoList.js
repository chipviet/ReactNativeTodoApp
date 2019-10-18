import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    let {items, handleDelete, handleEdit} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txtTitle}> List Works</Text>
        </View>
        <View style= {styles.listItemContainer}>
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}></TodoItem>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  listItem: {
    fontSize: 20,
    padding: 10,
  },
  listItemContainer: {
    width: 420,
    height:300,
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 5,
  },
  txtTitle: {
    fontSize: 20,
  }
});
