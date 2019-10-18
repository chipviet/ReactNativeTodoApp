import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class TodoItem extends Component {
  render() {
    let {title, handleDelete, handleEdit} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.txtform}>{this.title}</Text>
        <View>
          <Button
            style={styles.btnDelete}
            title="del"
            onPress={() => handleDelete()}></Button>
          <Button
            style={styles.btnEdit}
            title="edit"
            onPress={() => handleEdit()}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  txtform: {
    fontSize: 20,
    textShadowColor: '#DDF4FA',
  },
  btnDelete: {
    height: 100,
    width: 50,
    color: 'red',
  },
  btnEdit: {
    height: 50,
    width: 50,
    color: 'green',
  },
});
