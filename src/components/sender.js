const axios = require("axios");
const sender = async () => {
  const response = await axios.get(
    "https://gmail.us21.list-manage.com/subscribe/post-json",
    {
      params: {
        u: "aa81d3bfc0c1f3ba793280b88",
        id: "b7f07f685e",
        f_id: "00238be1f0",
        EMAIL: "sahil12345@gmail.com",
        // subscribe: "Subscribe",
      },
    }
  );

  console.log(response.data);
};
sender();
// Access - Control - Allow - Origin;

// Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://gmail.us21.list-manage.com/subscribe/post-jsongd?u=aa81d3bfc0c1f3ba793280b88&id=b7f07f685e&f_id=00238be1f0&EMAIL=sahil%40gmail.com&subscribe=Subscribe. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 404.
// curl 'https://gmail.us21.list-manage.com/subscribe/post-json?u=aa81d3bfc0c1f3ba793280b88&id=b7f07f685e&f_id=00238be1f0&c=jQuery190014006319094709296_1677842833729&EMAIL=sahil%40gmail.com&b_aa81d3bfc0c1f3ba793280b88_b7f07f685e=&subscribe=Subscribe&_=1677842833730' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0' -H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Connection: keep-alive' -H 'Referer: http://127.0.0.1:5500/' -H 'Sec-Fetch-Dest: script' -H 'Sec-Fetch-Mode: no-cors' -H 'Sec-Fetch-Site: cross-site' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache'
