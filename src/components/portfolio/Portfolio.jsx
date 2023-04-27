import "./portfolio.scss";
import { useState } from "react";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "/assets/mobile.png",
      title: "HTML, CSS and JavaScript Project",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      links: "https://arpa12.github.io/my-first-website/",
    },
    {
      id: "2",
      icon: "/assets/globe.png",
      title: "React Projects",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.ytimg.com/vi/ly3m6mv5qvg/maxresdefault.jpg",
      links: "https://arpa12.github.io/my-first-website/",
    },
    {
      id: "3",
      icon: "/assets/wordpress.png",
      title: "WordPress Projects",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://ps.w.org/wedevs-project-manager/assets/screenshot-1.png?rev=1388490",
      links: "https://saifullahintegratedresources.com/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.links}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
