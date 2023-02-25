import axios from "axios";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
const API_URL = process.env.REACT_APP_API_URL;
const contactForm = (payload) => {
  console.log(payload);
};

const freeQuote = (payload) => {
  console.log(payload);
};

const getIpData = async () => {
  const ipData = await axios.get("http://ip-api.com/json/?fields=126975");
  return ipData.data;
};

const locationName = (location) => {
  const { pathname } = location;
  if (String(pathname) === "/") {
    return "home";
  }
  // delete first slash
  // const path = String(location).slice(1);
  // delete last slash
  return pathname;
};

const currentUrlAndIpSender = async (ipData, location) => {
  console.log(locationName(location));
  console.log("sending url and ip to server");
  const result = await axios.post(API_URL, {
    ip: ipData,
    url: locationName(location),
  });
  console.log(result);
};
const ipSaver = (ipData) => {
  const now = new Date();
  // add ttl of 1 min to the data
  ipData.ttl = now.getTime() + 60000;
  // save to local storage
  localStorage.setItem("ipData", JSON.stringify(ipData));
};

const ipDataToLocalStorage = async (location) => {
  // check if ipData is in local storage
  const ipData = JSON.parse(localStorage.getItem("ipData"));
  // if ipData is not in local storage
  if (!ipData) {
    // get ip data
    console.log("ip dont exist in browser");
    const ipData = await getIpData();
    console.log("reqest is sent to get new ip data");

    // save ip data to local storage
    console.log(ipData);
    ipSaver(ipData);
    console.log("ip is saved");
    await currentUrlAndIpSender(ipData, location);
    console.log("url and ip is sent");
  } else {
    // if ipData is in local storage
    // check if ttl is expired
    const now = new Date();
    if (now.getTime() > ipData.ttl) {
      // get ip data
      const ipData = await getIpData();
      console.log("reqest is sent to get new ip data");
      // save ip data to local storage
      console.log(ipData);
      ipSaver(ipData);
      console.log("ip is saved");
      await currentUrlAndIpSender(ipData, location);
      console.log("url and ip is sent");
    } else {
      console.log("ip exist in browser");
      await currentUrlAndIpSender(ipData, location);
      console.log("url and ip is sent");
    }
  }
};

export { contactForm, freeQuote, ipDataToLocalStorage };
