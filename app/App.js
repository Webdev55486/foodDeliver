import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setKeyboardDistanceFromTextField(10);
KeyboardManager.setPreventShowingBottomBlankSpace(true);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setToolbarDoneBarButtonItemText("Done");
KeyboardManager.setToolbarManageBehaviour(0);
KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
KeyboardManager.setToolbarPreviousNextButtonEnable(false);
KeyboardManager.setShouldShowTextFieldPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setShouldResignOnTouchOutside(true);
KeyboardManager.resignFirstResponder();

import ScalingDrawer from './components/ScalingDrawer';
import TabBar from './components/Tabbar';
import HomeStack from './components/Router';
import SideMenu from './components/SideMenu';
import NavigationService from "./components/NavigationService";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  openSideBar() {
    this._drawer.open();
  }

  render() {
    return (
      <ScalingDrawer
        ref={ref => this._drawer = ref}
        content={<SideMenu />}
        swipeOffset={20}
        scalingFactor={0.6}
        minimizeFactor={0.5} >
        <View style={styles.container}>
          <HomeStack ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}/>
          <TabBar onItemClick={this.openSideBar.bind(this)} />
        </View>
      </ScalingDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    overflow: 'hidden',
  },
});
