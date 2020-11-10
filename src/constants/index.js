const actioncable = require("actioncable");

// export const API_ROOT = "http://localhost:3000";
// export const API_WS_ROOT = "ws://localhost:3000/cable";
export const API_ROOT = "https://gentle-castle-53687.herokuapp.com";
export const API_WS_ROOT = actioncable.createConsumer(
  "wss://gentle-castle-53687.herokuapp.com/cable"
);
export const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
