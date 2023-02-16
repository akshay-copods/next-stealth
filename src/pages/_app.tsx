import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return <ConfigProvider theme={{
    token: {
      colorPrimary: "#2F54EB",
      borderRadius: 2
    },
  }}>
    <Component {...pageProps} />
  </ConfigProvider>

}
