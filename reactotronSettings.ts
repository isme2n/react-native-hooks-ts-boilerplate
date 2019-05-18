import Reactotron from "reactotron-react-native";

export const reactotronSettingsUp = () => {
  if (__DEV__) {
    Reactotron.configure()
      .useReactNative()
      .connect();
  }
};
