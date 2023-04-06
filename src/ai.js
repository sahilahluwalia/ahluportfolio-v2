const axios = require("axios");

const requestSender = async () => {
  const response = await axios.post(
    "https://ai.seomonky.com/api/chat",
    {
      model: {
        id: "gpt-3.5-turbo",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 3000,
      },
      messages: [
        {
          role: "user",
          content: "hello",
        },
        {
          role: "assistant",
          content: "",
        },
        {
          role: "user",
          content:
            "write 500 words blog post about how to use GPT-3 to write blog posts",
        },
      ],
    },
    {
      headers: {
        authority: "ai.seomonky.com",
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        //   'cookie': '_clck=334mft|1|fad|0; _ga=GA1.2.505834834.1680270433; _gid=GA1.2.139970927.1680270433; _gat_gtag_UA_262384680_1=1; _clsk=1wvw6ql|1680270434259|1|1|z.clarity.ms/collect',
        origin: "https://ai.seomonky.com",
        referer: "https://ai.seomonky.com/",
        "sec-ch-ua": '"Chromium";v="111", "Not(A:Brand";v="8"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
      },
    }
  );
  console.log(response.data);
  return response;
};

requestSender();
