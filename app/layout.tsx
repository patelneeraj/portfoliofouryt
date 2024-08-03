import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Neeraj Patel",
  description:
    "Hi, I'm a passionate Full-Stack Developer specializing in web and mobile development. With expertise in JavaScript, Python, and cloud technologies, I create robust applications and share my knowledge through technical blogs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
