/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import Reactotron from "reactotron-react-native";
import CodePush from "react-native-code-push";

import { reactotronSettingsUp } from "./reactotronSettings";
import { sentrySettingsUp } from "./sentrySettings";

// Settings

reactotronSettingsUp();

sentrySettingsUp();

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
class App extends Component<Props> {
  private onButtonPress = () => {
    CodePush.sync({
      updateDialog: CodePush.DEFAULT_UPDATE_DIALOG,
      installMode: CodePush.InstallMode.IMMEDIATE
    });
  };
  render() {
    Reactotron.log("ReactApp Start!!");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to CodePushApp!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START
};

const CodePushApp = CodePush(codePushOptions)(App);

export default CodePushApp;
