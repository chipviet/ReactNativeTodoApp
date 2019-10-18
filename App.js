import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function Separator() {
  return <View style={styles.separator} />;
}

class App extends Component {

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.subject}>Your Daily Works</Text>
        </View>
        <Separator></Separator>
        <View style={styles.containerTodoInput}>
          <TodoInput
          ></TodoInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    alignItems: 'stretch',
  },
  container: {
    flex:1,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEDED',
  },
  subject: {
    justifyContent: 'center',
    fontSize: 30,
  },
  containerTodoInput: {
    flex:3,
    justifyContent: 'space-around',
    height: 250,
    backgroundColor: 'skyblue',
  },
  textform: {
    fontSize: 30,
    textShadowColor: '#DDF4FA',
  },
  buttonSubmit: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default App;
