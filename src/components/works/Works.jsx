import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      // title: "Web Design",
      title: "Nomura Loan Trading Platform",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc: "The Client Portal provides a streamlined view of a client’s account,  including a dashboard displaying key account metrics in real time, such as portfolio positions, P&L, buying power; an overall summary about portfolio performances, recent transactions, and monthly return. ",
      // img:
      //   "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      img: "https://www.nomuraholdings.com/services/wholesale/image/gm_tab03.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      // title: "Mobile Application",
      title: "Enterprise Pharmacy System",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "EPS is a pharmacy management solution for all sizes and types of pharmacies. It enables efficient prescription fulfillment, outbound notifications, medication synchronization, dedicated prescription counseling, and mail-order services. And additionally for those senior and handicapped, EPS offers specialty services and online prescription management.",
      // img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      img: "https://cdn.vidyard.com/thumbnails/12383033/Ild1K1RURLPM8RkeXswPAMcrv_94tKmZ.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      // title: "Branding",
      title: "Payment Execution Processor",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "Allowing users to customize payments and embed  them into their business websites. Users can also share payment links via email, SMS and live chat, and business owners can request payment from customers with multiple options. Both sides will receive notification and invoice once the transaction is successful.",
      // img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      img: "https://www.dreamhost.com/blog/wp-content/uploads/2017/11/online_payment.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  // src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
