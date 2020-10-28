// export const API_ROOT = "http://localhost:3000";
// export const API_WS_ROOT = "ws://localhost:3000/cable";
export const API_ROOT = "https://sezzle-calculator-backend.herokuapp.com";
export const API_WS_ROOT =
  "wss://https://sezzle-calculator-backend.herokuapp.com/cable";
export const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const API_ROOT =
  process.env.NODE_ENV === "development" ? dev.url.API_ROOT : prod.url.API_ROOT;

export const API_WS_ROOT =
  process.env.NODE_ENV === "development"
    ? dev.url.API_WS_ROOT
    : prod.url.API_WS_ROOT;
