import "../styles/globals.css";
import type { AppProps } from "next/app";

export type TodoItemProps = {
  id: number;
  title: string;
  done: boolean;
};

export default function TodoItem({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}
