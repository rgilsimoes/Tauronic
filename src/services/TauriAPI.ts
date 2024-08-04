/* eslint-disable no-console */
import * as TauriApp from '@tauri-apps/api/app';
import * as TauriOs from '@tauri-apps/plugin-os';

const getTauriVersion = async (): Promise<string | undefined> => {
  try {
    return await TauriApp.getTauriVersion();
  } catch (error) {
    console.error(`Tauri API not available on this device: ${error}`);
  }
};

const getAppName = async (): Promise<string | undefined> => {
  try {
    return await TauriApp.getName();
  } catch (error) {
    console.error(`Tauri API not available on this device: ${error}`);
  }
};

const getPlatformName = async (): Promise<string | undefined> => {
  try {
    return await TauriOs.platform();
  } catch (error) {
    console.error(`Tauri API not available on this device: ${error}`);
  }
};

export default {
  getTauriVersion,
  getAppName,
  getPlatformName,
};
