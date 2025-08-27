import React from 'react';
import Sidebar from '../layouts/Sidebar';
import PropertyCard from '../components/PropertyCard';
import './HomePage.css'; // We'll create this CSS file next

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Sidebar />
      <div className="main-content">
        <div className="card-list">
          <PropertyCard />
          <PropertyCard />
           <PropertyCard />
            <PropertyCard />
             <PropertyCard />
              <PropertyCard />
               <PropertyCard />
                <PropertyCard />
                 <PropertyCard />
                  <PropertyCard />
                   <PropertyCard />
                    <PropertyCard />
                     <PropertyCard />
                      <PropertyCard />
                       <PropertyCard />
                        <PropertyCard />
                         <PropertyCard />
                          <PropertyCard />
                           <PropertyCard />
                            <PropertyCard />
                             <PropertyCard />
                              <PropertyCard />
                               <PropertyCard />
                                <PropertyCard />
                                 <PropertyCard />
                                  <PropertyCard /> <PropertyCard />
          {/* You can duplicate the <PropertyCard /> component as many times as you like */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;