const dns = require("dns");

dns.lookup("example.com", (err, address, family) => {
  console.log("Address:", address);
});

dns.resolve4("example.com", (err, addresses) => {
  console.log("IPv4 Addresses:", addresses);
});

dns.reverse("93.184.216.34", (err, hostnames) => {
  console.log("Hostnames:", hostnames);
});
