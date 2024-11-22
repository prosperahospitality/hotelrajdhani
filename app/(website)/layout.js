import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";

export const metadata = {
  title: "Hotel Rajdhani",
  description: "Best Family Hotel in Halol Near Pavagadh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
