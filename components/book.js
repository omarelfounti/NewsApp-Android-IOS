import React, { Component } from 'react';
import {View, Text } from 'react-native';

export default class Book extends Component {
  render() {
    return (
      <View>
        <Text>Author: Peter Smith</Text>
        <Text>Title: Java Programming</Text>
      </View>
    );
  }
}