import { ReactNode } from "react";
import "./style.css";
export const Container = (props: any) => {
  return <section className="container">{props.children}</section>;
};
