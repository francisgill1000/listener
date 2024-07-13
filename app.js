const { log } = require("console");
const fs = require("fs");

let path = "../device_sdk/appsettings.json";

const os = require("os");
const networkInterfaces = os.networkInterfaces();

let ipv4Address = null;

Object.keys(networkInterfaces).forEach((interfaceName) => {
  networkInterfaces[interfaceName].forEach((networkInterface) => {
    // Only consider IPv4 addresses, ignore internal and loopback addresses
    if (networkInterface.family === "IPv4" && !networkInterface.internal) {
      ipv4Address = networkInterface.address;
    }
  });
});

log(ipv4Address);
