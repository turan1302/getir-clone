import React, { Component } from 'react'
import { SafeAreaView } from "react-native";
import Router from "./src/router"
import { Provider } from "mobx-react";
import Store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider {...Store}>
        <SafeAreaView style={{flex : 1}}>
          <Router/>
        </SafeAreaView>
      </Provider>
    )
  }
}
