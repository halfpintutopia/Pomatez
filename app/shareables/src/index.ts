export const CHECK_FOR_UPDATES = "CHECK_FOR_UPDATES";
export const SET_ALWAYS_ON_TOP = "SET_ALWAYS_ON_TOP";
export const SET_FULLSCREEN_BREAK = "SET_FULLSCREEN_BREAK";
export const SET_COMPACT_MODE = "SET_COMPACT_MODE";
export const SET_EXTENDED_MODE = "SET_EXTENDED_MODE";
export const SET_NATIVE_TITLEBAR = "SET_NATIVE_TITLEBAR";
export const SET_OPEN_AT_LOGIN = "SET_OPEN_AT_LOGIN";
export const TRAY_ICON_UPDATE = "TRAY_ICON_UPDATE";
export const SET_UI_THEME = "SET_UI_THEME";
export const MINIMIZE_WINDOW = "MINIMIZE_WINDOW";
export const CLOSE_WINDOW = "CLOSE_WINDOW";
export const SHOW_WINDOW = "SHOW_WINDOW";
export const UPDATE_AVAILABLE = "UPDATE_AVAILABLE";
export const INSTALL_UPDATE = "INSTALL_UPDATE";

export const TO_MAIN: string[] = [
  SET_ALWAYS_ON_TOP,
  SET_FULLSCREEN_BREAK,
  SET_COMPACT_MODE,
  SET_EXTENDED_MODE,
  SET_NATIVE_TITLEBAR,
  SET_OPEN_AT_LOGIN,
  TRAY_ICON_UPDATE,
  SET_UI_THEME,
  MINIMIZE_WINDOW,
  CLOSE_WINDOW,
  SHOW_WINDOW,
  INSTALL_UPDATE,
];

export const FROM_MAIN: string[] = [UPDATE_AVAILABLE];

export const RELEASE_NOTES_LINK =
  "https://github.com/zidoro/pomatez/releases/latest";
