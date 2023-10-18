import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Browse = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedType = queryParams.get("selectedType");

  const [propertyData, setPropertyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(selectedType ? [selectedType] : []);

  const fetchProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getall");
    if (res.status === 200) {
      const data = await res.json();
      setPropertyData(data);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const displayData = () => {
    // Filter the PropertyData based on searchQuery and selectedTypes
    const filteredData = propertyData.filter((property) => {
      const categoryMatch = selectedTypes.length === 0 || selectedTypes.includes(property.category);
      const nameMatch = property.name.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && nameMatch;
    });

    return filteredData.map((property) =>
      property.price ? (
        <div className="col-md-3 py-2 property-card-browse" key={property.type}>
          <div className="card">
            <img
              className="card img-resize img-fluid"
              src={"http://localhost:5000/" + property.image}
              alt=""
            />
            <div className="card-body">
              <h3>{property.name}</h3>
              <h6 className="text-success">{property.category}</h6>
              <h6>{property.location}, {property.city}</h6>
              <div className='justify-content-between d-flex'>
                <h4>&#8377; {property.price}</h4>
                  <Link to={"/spacedetails/" + property._id}>
                    <button className="btn btn-primary text-center">Buy Now</button>
                  </Link>              
              </div>
            </div>
          </div>
        </div>
      ) : null
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const selectOption = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div>
      <header className="bg-dark text-white ">
        <div className="container py-5">
          <h1 className="text-center">Browse Property</h1>
          <hr />
          <input
            type="text"
            className="form-control"
            placeholder="Search property"
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <div className="row mt-4">
            <div className="col-md-4 my-auto">
              <input
                checked={selectedTypes.includes('Hostel')}
                onClick={() => selectOption('Hostel')}
                className="form-check-input"
                type="checkbox"
              />
              Hostel&nbsp;&nbsp;&nbsp;
              <input
                checked={selectedTypes.includes('Flat')}
                onClick={() => selectOption('Flat')}
                className="form-check-input"
                type="checkbox"
              />
              Flat&nbsp;&nbsp;&nbsp;
              <input
                checked={selectedTypes.includes('PG')}
                onClick={() => selectOption('PG')}
                className="form-check-input"
                type="checkbox"
              />
              PG&nbsp;&nbsp;&nbsp;
              <input
                checked={selectedTypes.includes('Shared Apartments')}
                onClick={() => selectOption('Shared Apartments')}
                className="form-check-input"
                type="checkbox"
              />
              Shared Apartments&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </header>

      <hr />

      <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
  );
};

export default Browse;