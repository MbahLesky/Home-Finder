import PropertyCard from "../components/PropertyCard";
import "./PropertyList.css";

function MyPropertyList() {
  return <div>
    <h1>My Properties</h1>
    <div className="my-property-list">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
    </div>
  </div>;
}

export default MyPropertyList;