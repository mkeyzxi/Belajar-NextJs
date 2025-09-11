// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "./components/layouts/AppShell";
import "@/styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />

    </AppShell>

  );
}
