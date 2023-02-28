import axios from "axios";
import { decode as base64_decode, encode as base64_encode } from "base-64";

import jsonp from "jsonp";
const API_URL = process.env.REACT_APP_API_URL;
const LOCAL_ENV = process.env.REACT_APP_DEVELOPEMENT_ENV;
const contactForm = (payload) => {
  console.log(payload);
};

const freeQuote = (payload) => {
  console.log(payload);
};

const getIp = async () => {
  const result = await new Promise((resolve, reject) => {
    jsonp("https://api.ipify.org?format=jsonp", null, (err, data) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        // console.log(data);
        resolve(data);
      }
    });
  });
  // console.log(result.ip);
  return result.ip;
};

// const getIp = async () => {
//   const result = jsonp(
//     "https://api.ipify.org?format=jsonp&callback=ip",
//     null,
//     (err, data) => {
//       if (err) {
//         console.error(err.message);
//         return false;
//       } else {
//         console.log(data);
//         return data;
//       }
//     }
//   );
//   return result;

//   // const result = await axios.get("https://api.ipify.org?format=json");
//   // return result.data.ip;
// };

const getIpData = async () => {
  const ip = await getIp();
  // console.log("my ip is ", ip);
  const result = await new Promise((resolve, reject) => {
    jsonp(`https://ipapi.co/${ip}/jsonp/`, null, (err, data) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
  console.log("result is ", result);
  return result;
  // const ipData = await axios.get(`https://ipapi.co/${ip}/json/`);
  // return ipData.data;
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
  if (LOCAL_ENV == "localy") {
    console.log("LOCAL DEV ENIRONMNET");
    return;
  }
  const result = await axios.post(API_URL, {
    payload: base64_encode(JSON.stringify(ipData)),
    url: locationName(location),
  });
  // console.log(result);
  console.log(true);
  return result;
};

const ipSaver = (ipData) => {
  const now = new Date();
  // add ttl of 1 min to the data
  ipData.ttl = now.getTime() + 60000;
  // save to local storage

  localStorage.setItem("local", JSON.stringify(ipData));
};

const ipDataToLocalStorage = async (location) => {
  // check if ipData is in local storage
  const ipData = JSON.parse(localStorage.getItem("local"));
  // if ipData is not in local storage

  if (!ipData) {
    // get ip data
    // console.log("ip dont exist in browser");
    const ipData = await getIpData();
    // console.log("reqest is sent to get new ip data");
    // save ip data to local storage
    // console.log("IP DATA IS");
    // console.log(ipData);
    ipSaver(ipData);
    // console.log("ip is saved");
    const result = await currentUrlAndIpSender(ipData, location);
    return result;
  } else {
    const now = new Date();
    if (now.getTime() > ipData.ttl) {
      // get ip data
      const ipData = await getIpData();
      // console.log("reqest is sent to get new ip data");
      // save ip data to local storage
      // console.log(ipData);
      ipSaver(ipData);
      // console.log("ip is saved");
      const result = await currentUrlAndIpSender(ipData, location);
      // console.log("url and ip is sent");
      return result;
    } else {
      // console.log("ip exist in browser");
      const result = await currentUrlAndIpSender(ipData, location);
      // console.log("url and ip is sent");
      return result;
    }
  }
};

export { contactForm, freeQuote, ipDataToLocalStorage };
