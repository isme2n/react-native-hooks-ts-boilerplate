import { Sentry } from "react-native-sentry";

import { SENTRY_ENDPOINT } from "react-native-dotenv";

export const sentrySettingsUp = () => {
  Sentry.config(SENTRY_ENDPOINT).install();
};
