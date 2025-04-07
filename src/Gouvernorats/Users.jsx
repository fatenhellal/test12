import React, { useState ,useEffect} from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import './users.css';
import Footer from "../Footer";
import Search from "./Search";



const Users = () => {
  const location = useLocation();
  const { subcategory, gouvernoratData, gouvernoratName } = location.state || {};
  const [selectedDelegations, setSelectedDelegations] = useState([]);
  const delegations = gouvernoratData?.delegations || [];
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [users, setUsers] = useState([]);


useEffect(() => {
  fetch("/users.json")
    .then((response) => response.json())
    .then((json) => setUsers(json))
    .catch((error) => console.error("Erreur lors du chargement du fichier JSON:", error));
    console.log(users);
}, []);

 


  const handleCheckboxChange = (delegation) => {
    setSelectedDelegations((prev) =>
      prev.includes(delegation)
        ? prev.filter((item) => item !== delegation)
        : [...prev, delegation]
    );
  };

  const handleUserClick = (user) => {
    console.log('test:'+`${user.name.toLowerCase()}`)
    navigate(`${user.name.toLowerCase()}`, { state: { user, gouvernoratData } });
  };

  if (!subcategory || !gouvernoratData) {
    return <div>No data available for this subcategory or gouvernorat.</div>;
  }

  // Filter users based on gouvernorat and subcategory
  const filteredUsers = users.filter(
    (user) =>
      user.gouvernorat === gouvernoratName &&
      user.activité === subcategory.name
  );

  // Further filter users based on selected delegations
  const finalUsers =
    selectedDelegations.length > 0
      ? filteredUsers.filter((user) =>
          selectedDelegations.includes(user.delegation)
        )
      : filteredUsers;

  return (
    <div className="container-column">
      <div className="container-user">
        {/* Left Section: Delegations List */}
        <div className="left-section-user">
          <div className="gouvernaurat-container-user">
            <h3 className="gouvernaurat-title-user">{gouvernoratName}</h3>
            <ul className="delegation-list-user">
              {delegations.map((delegation, index) => (
                <li key={index} className="delegation-item-user">
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

        {/* Middle Section: Background Image and Users List */}
        <div className="middle-section">
          {/* Background Image Section */}
          <div className="background-image-container">
            <img
              src={`/${subcategory.image}`}
              alt={subcategory.name}
              className="gouvernaurat-image"
            />
            <div className="image-overlay-text">
              <p className="gouvernaurat-name">{subcategory.name}</p>
            </div>
          </div>

          {/* Users List Section */}
          <Search />
          {finalUsers.length === 0 ? (
            // Display error message if no users are found
            <div className="no-results-message">
              <p style={{ color: 'blue', textAlign: 'center',marginTop:'50px' }}>
                Aucun résultat trouvé.
              </p>
            </div>
          ) : (
            <div className="users-grid">
              {finalUsers.map((user, index) => (
                <div
                  key={index}
                  className="users-item-user cursor-pointer"
                  onClick={() => handleUserClick(user)}
                >
                  {/* White Container for Each Item */}
                  <div className="user-item-container">
                    {/* Image Container */}
                    <div className="image-container-user">
                      <img
                        src={user.logo_url}
                        alt={user.name}
                        className="image-user"
                      />
                      {/* Heart Icon */}
                      <div
                        className="heart-icon"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent navigation when clicking the heart
                          // Add logic to toggle favorite state
                        }}
                      >
                        ♡
                      </div>
                    </div>

                    {/* Text Container */}
                    <div className="text-container-user">
                      <p className="user-name">{user.name}</p>
                      <p className="user-delegation">{user.delegation}</p>
                      <p className="user-address">{user.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Placeholder for Ads */}
        <div className="right-section-user">
          {/* Placeholder for right ad */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Users;