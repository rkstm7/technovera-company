import React from "react";
import Router from "./router";
// import WAFloat from "./components/WAFloat/WAFloat"; // WhatsApp integration commented out
import InquiryForm from "./components/InquiryForm/InquiryForm";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
        {/* GLOBAL TOASTER – Works on all pages */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3500,
            style: {
              background: "#111",
              color: "#fff",
            },
            success: {
              style: {
                background: "#0f5132",
                color: "#fff",
              },
              iconTheme: {
                primary: "#198754",
                secondary: "#fff",
              },
            },
            error: {
              style: {
                background: "#842029",
                color: "#fff",
              },
              iconTheme: {
                primary: "#dc3545",
                secondary: "#fff",
              },
            },
          }}
        />

        {/* GLOBAL WHATSAPP BUTTON - Commented out */}
        {/* <WAFloat /> */}

        {/* GLOBAL INQUIRY FORM - Sticky button + Popup on all pages */}
        <InquiryForm />

        {/* MAIN APP ROUTES */}
        <Router />
      </div>
    </ThemeProvider>
  );
}
