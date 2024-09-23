import React, { useState } from "react";
import PageHeaderContent from "../../component/page_headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpeg";
import "./Style.scss";

// Portfolio data with categories for filtering
const portfolioData = [
  {
    id: 1,
    category: "ML", // Category for filtering
    name: "Machine Learning",
    image: ImageTwo,
    link: "https://github.com/theyug/Data_Science/blob/main/Yug_DS_final.ipynb",
  },
  {
    id: 2,
    category: "Development", // Category for filtering
    name: "Development",
    link: "https://github.com/theyug/smart_contact_manager",
    image: ImageOne,
  },
];

// Filter buttons data
const filterData = [
  {
    filterId: "All",
    label: "All",
  },
  {
    filterId: "ML",
    label: "ML",
  },
  {
    filterId: "Development",
    label: "Development",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState("All"); // Set to "All" by default to show all items
  const [hoveredValue, setHoveredValue] = useState(null);

  // Function to handle filtering
  function handleFilter(filterId) {
    setFilteredValue(filterId);
  }

  // Function to handle hovering effect
  function handleHover(index) {
    setHoveredValue(index);
  }

  // Filter the portfolio items based on the selected filter
  const filteredItems =
    filteredValue === "All"
      ? portfolioData // Show all items when 'All' is selected
      : portfolioData.filter((item) => item.category === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link}>
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
