

import React, { useState } from 'react';
import SelectPropertyType from './SelectPropertyType';
import SaleRentStep from './SaleRentStep';
import PropertyInfoStep from './PropertyInfoStep';
import PropertyMediaUpload from './PropertyMediaUpload';



const AddPropertyForm = () => {
	const [step, setStep] = useState(0);
	const [propertyType, setPropertyType] = useState("");
	const [saleOrRent, setSaleOrRent] = useState("");

	// Save handler for all steps
	const handleSave = (data) => {
		// Save logic here (e.g., update state, send to API)
		// For now, just log
		console.log("Save data:", data);
	};

	return (
		<div>
			<div style={{ marginBottom: 16 }}>
				Step {step + 1} of 4
			</div>
			{step === 0 && (
				<SelectPropertyType
					onNext={type => { setPropertyType(type); setStep(1); }}
					onBack={null}
					onSave={handleSave}
				/>
			)}
			{step === 1 && (
				<SaleRentStep
					propertyType={propertyType}
					onNext={value => { setSaleOrRent(value); setStep(2); }}
					onBack={() => setStep(0)}
					onSave={handleSave}
				/>
			)}
			{step === 2 && (
				<PropertyInfoStep
					propertyType={propertyType}
					saleOrRent={saleOrRent}
					onNext={() => setStep(3)}
					onBack={() => setStep(1)}
					onSave={handleSave}
				/>
			)}
			{step === 3 && (
				<PropertyMediaUpload
					onNext={() => {/* Final step, maybe submit or show confirmation */}}
					onBack={() => setStep(2)}
					onSave={() => {
						alert("Property added successfully!");
						handleSave();
					}}
				/>
			)}
		</div>
	);
};

export default AddPropertyForm;
