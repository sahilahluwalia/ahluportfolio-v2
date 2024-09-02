import type { Metadata } from 'next'
import "../App.css";

import "../plugins/fontawesome/css/font-awesome.min.css";
import "../plugins/line-awesome/css/line-awesome.min.css";
import "../plugins/flaticon/flaticon.css";
import "../plugins/flaticon/beer/flaticon.css";

export const metadata: Metadata = {
    title: 'Ahlu Engineers - Advanced Manufacturing Solutions | Industrial Automation',
    description:"Ahlu Engineers provides the one-stop hub for SPM solutions in Manufacturing, Assembly, Vision Inspection & Transfer Presses manufacturer."
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="en">
        <head>
        {/*// <!-- Google tag (gtag.js) -->*/}
    <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-TM0RPKPJNE"
        ></script>
    {/*<script>*/}
    {/*    window.dataLayer = window.dataLayer || [];*/}
    {/*    function gtag() {*/}
    {/*    dataLayer.push(arguments);*/}
    {/*}*/}
    {/*    gtag("js", new Date());*/}

    {/*    gtag("config", "G-TM0RPKPJNE");*/}
    {/*</script>*/}
    {/*// <!-- content="Ahlu Engineers delivers advanced Special Purpose Machines & automation solutions to optimize your manufacturing process. Achieve efficiency, productivity & safety with us."  -->*/}
    <script defer src="https://unami-fork.vercel.app/script.js" data-website-id="9f1df629-5c8f-41f9-a7cd-7a3d1d6a66df"></script>
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#000000" />
    <meta
        name="description"
    />
    {/*// <!--*/}
    {/*//   manifest.json provides metadata used when your web app is installed on a*/}
    {/*// user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/*/}
    {/*// -->*/}

    {/*    <!--*/}
    {/*        Notice the use of %PUBLIC_URL% in the tags above.*/}
    {/*    It will be replaced with the URL of the `public` folder during the build.*/}
    {/*    Only files inside the `public` folder can be referenced from the HTML.*/}

    {/*    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will*/}
    {/*work correctly both with client-side routing and a non-root public URL.*/}
    {/*    Learn how to configure a non-root public URL by running `npm run build`.*/}
    {/*-->*/}
    {/*// <!-- <script src="./WhatsappChatBox.min.js"></script> -->*/}

    {/*// <!-- <link rel="stylesheet" href="/skin/skin-1.min.css"> -->*/}
    </head>
    <body id="bg">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
    </body>
</html>
)
}
