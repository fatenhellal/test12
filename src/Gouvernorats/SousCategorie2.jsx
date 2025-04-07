import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Categories.css';
import Footer from "../Footer";
import Search from "./Search";

const Subcategories2 = () => {
  const location = useLocation();
  const { subcategory, gouvernoratData, gouvernoratName } = location.state || {};
  const [selectedDelegations, setSelectedDelegations] = useState([]);
  const delegations = gouvernoratData?.delegations || [];
  const navigate = useNavigate();

  const handleClick = (nestedSubcategory) => {
    if (nestedSubcategory.subcategories) {
      // If there are nested subcategories
      navigate(`/tunisie/${gouvernoratName.toLowerCase()}/${nestedSubcategory.name.toLowerCase()}`, {
        state: {
          subcategory: nestedSubcategory,  
          gouvernoratData,
          gouvernoratName,
        },
      });
    } else {
      // If there are no further nested subcategories
      navigate(`/tunisie/${gouvernoratName.toLowerCase()}/${nestedSubcategory.name.toLowerCase()}`, {
        state: {
          gouvernoratName,
          gouvernoratData,
          subcategory: nestedSubcategory,   
          nestedSubcategory,
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

  if (!subcategory || !gouvernoratData) {
    return <div>No data available for this subcategory or gouvernorat.</div>;
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
              src={`/${subcategory.image}`}
              alt={subcategory.name}
              className="gouvernaurat-image"
            />
            <div className="image-overlay-text">
              <p className="category-name">{subcategory.name}</p>
            </div>
          </div>

          {/* Subcategories List Section */}
          <Search />
          <div className="categories-list-container">
            <div className="categories-grid">
              {subcategory.subcategories?.map((nestedSubcategory, index) => (
                <div
                  key={index}
                  className="subcategory-item-cat cursor-pointer"
                  onClick={() => handleClick(nestedSubcategory)}
                >
                  <div className="image-container-cat">
                    <img
                      src={`/${nestedSubcategory.image}`}
                      alt={nestedSubcategory.name}
                      className="image-cat"
                    />
                    <div className="overlay-cat">
                      <div className="overlay1-cat">
                        <p className="subcategory-name-cat">{nestedSubcategory.name}</p>
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

export default Subcategories2;