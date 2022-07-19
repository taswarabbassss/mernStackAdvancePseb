import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Body = () => {
  return (
    <div id="body">
      <Header />
      <Card
        className="section"
        img="./Capture1.svg"
        title="About the Company"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempore modi a aliquid at dolores amet corrupti ab, recusandae molestias dignissimos similique ratione quod odit atque hic voluptatibus facilis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus autem iusto, vitae obcaecati, asperiores vero quos hic enim a ex voluptatum voluptatem magnam. Laudantium autem aperiam, officiis modi mollitia ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, explicabo doloribus laboriosam, dolor, dignissimos voluptatum tenetur fuga libero maxime expedita ex vitae dicta? Labore recusandae eum eaque ex voluptatum possimus?"
      />
      <Card
        className="section Two"
        img="./logo.svg"
        title="About the Compan"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tempore modi a aliquid at dolores amet corrupti ab, recusandae molestias dignissimos similique ratione quod odit atque hic voluptatibus facilis adipisci! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus autem iusto, vitae obcaecati, asperiores vero quos hic enim a ex voluptatum voluptatem magnam. Laudantium autem aperiam, officiis modi mollitia ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, explicabo doloribus laboriosam, dolor, dignissimos voluptatum tenetur fuga libero maxime expedita ex vitae dicta? Labore recusandae eum eaque ex voluptatum possimus?"
      />
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <span className="header-title">Company</span> <br />
      <span className="header-text">We Specialise in something.... </span>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=""></img>
      </div>
      <div className="big-div">
        <span className="div-title">{props.title}</span>
        <br />
        <span>{props.description}</span>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
