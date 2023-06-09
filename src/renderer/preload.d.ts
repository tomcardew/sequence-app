/* eslint-disable prettier/prettier */
import { ElectronHandler } from "main/preload";

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}

export {};
