import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.inappbrowser.cap',
  appName: 'base',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
