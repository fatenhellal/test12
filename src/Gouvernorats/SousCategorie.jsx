import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";
import Search from "./Search";

const SousCategories = () => {
  const location = useLocation();
  const { categoryData, gouvernoratData, gouvernoratName } = location.state || {};
  const [selectedDelegations, setSelectedDelegations] = useState([]);
  const delegations = gouvernoratData?.delegations || [];
  const navigate = useNavigate();

  const handleClick = (subcategory) => {
    console.log("Subcategory clicked:", subcategory);
    console.log("Gouvernorat Name:", gouvernoratName);
    console.log("Gouvernorat Data:", gouvernoratData);
    console.log("Category Data:", categoryData);

    if (subcategory.subcategories) {
      console.log("Navigating to sub-subcategory route...");
      navigate(`/tunisie/${gouvernoratName.toLowerCase()}/${subcategory.name.toLowerCase()}/sub`, {
        state: {
          subcategory,
          gouvernoratData,
          gouvernoratName,
        },
      });
    } else {
      console.log("Navigating to subcategory route...");
      navigate(`/tunisie/${gouvernoratName.toLowerCase()}/${subcategory.name.toLowerCase()}`, {
        state: {
          gouvernoratName,
          gouvernoratData,
          categoryData,
          subcategory,
        },
      });
    }
  };

  const handleCheckboxChange = (delegation) => {
    setSelectedDelegations((prev) =>
      prev.includes(delegation)
        ? prev.filter((item) => item !== delegation)
        : [...prev, delegation]
    );
  };

  if (!categoryData || !gouvernoratData) {
    return <div>No data available for this category or gouvernorat.</div>;
  }

  return (
    <div className="container-column">
      <div className="container-cat">
        {/* Left Section: Delegations List */}
        <div className="left-section-cat">
          <div className="gouvernaurat-container-cat">
            <h3 className="gouvernaurat-title-cat">{gouvernoratName}</h3>
            <ul className="delegation-list-cat">
              {delegations.map((delegation, index) => (
                <li key={index} className="delegation-item-cat">
                  <label>
                    <input
                      type="checkbox"
                      value={delegation}
                      checked={selectedDelegations.includes(delegation)}
                      onChange={() => handleCheckboxChange(delegation)}
                    />
                    {delegation}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Background Image and Subcategories List */}
        <div className="middle-section-cat">
          {/* Background Image Section */}
          <div className="background-image-container">
            <img
              src={`/${categoryData.image}`}
              alt={categoryData.category}
              className="gouvernaurat-image"
            />
            <div className="image-overlay-text">
              <p className="category-name">{categoryData.category}</p>
            </div>
          </div>
          <Search />
          {/* Subcategories List Section */}
          <div className="categories-list-container">
            <div className="categories-grid">
              {categoryData.subcategories?.map((subcategory, index) => (
                <div
                  key={index}
                  className="subcategory-item-cat cursor-pointer"
                  onClick={() => handleClick(subcategory)}
                >
                  <div className="image-container-cat">
                    <img
                      src={`/${subcategory.image}`}
                      alt={subcategory.name}
                      className="image-cat"
                    />
                    <div className="overlay-cat">
                      <div className="overlay1-cat">
                        <p className="subcategory-name-cat">{subcategory.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Placeholder for Ads */}
        <div className="right-section-cat">
          {/* Placeholder for right ad */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SousCategories;