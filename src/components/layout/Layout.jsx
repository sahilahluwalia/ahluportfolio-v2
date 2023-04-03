import { Outlet } from "react-router-dom";
import onlyAhluLogo from "asserts/onlyAhluLogo.png";
import Header from "./Header";
import Footer from "./Footer";
// import { WhatsAppWidget } from "react-whatsapp-widget";
// import "react-whatsapp-widget/dist/index.css";
// If you use CSS/SCSS vs. styled components
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
function Layout() {
  return (
    <div>
      <Header />

      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />
      <WhatsAppWidget
        phoneNo='+918295150210'
        position='left'
        iconSize='50'
        iconColor='white'
        iconBgColor='#4dc247'
        headerIcon={onlyAhluLogo}
        // headerIconColor='pink'
        headerTxtColor='white'
        headerBgColor='#0a5f54'
        headerTitle='Ahlu Engineers'
        headerCaption='Online'
        bodyBgColor='#e5ddd5'
        chatPersonName='Ahlu Engineers'
        chatMessage={
          <>
            <div
              style={{
                margin: "1rem 0rem 0rem 0rem",
              }}
            >
              {" "}
              Hi there 👋
              <br /> How can I help you?
            </div>
          </>
        }
        footerBgColor='white'
        btnBgColor='#4dc247'
        btnTxtColor='white'
      />
      <Footer />
    </div>
  );
}

export default Layout;
