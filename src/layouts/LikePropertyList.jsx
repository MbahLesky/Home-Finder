import PropertyCard from "../components/PropertyCard";
import "./PropertyList.css";

function LikePropertyList() {
    return (
        <div>
            <h1>Like Property List</h1>
            <div className="my-property-list">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />p
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    );
}

export default LikePropertyList;