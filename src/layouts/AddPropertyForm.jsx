

import React, { useState } from 'react';
import SelectPropertyType from './SelectPropertyType';
import SaleRentStep from './SaleRentStep';
import PropertyInfoStep from './PropertyInfoStep';

const AddPropertyForm = () => {
	const [step, setStep] = useState(0);
	const [propertyType, setPropertyType] = useState("");
	const [saleOrRent, setSaleOrRent] = useState("");

	const handleSelectType = (type) => {
		setPropertyType(type);
		setStep(1);
	};

	const handleSelectSaleRent = (value) => {
		setSaleOrRent(value);
		setStep(2);
	};

	const handleBackToType = () => setStep(0);
	const handleBackToSaleRent = () => setStep(1);

	return (
		<div>
			<div style={{ marginBottom: 16 }}>
				Step {step + 1} of 3
			</div>
			{step === 0 && (
				<SelectPropertyType onNext={handleSelectType} />
			)}
			{step === 1 && (
				<SaleRentStep
					propertyType={propertyType}
					onNext={handleSelectSaleRent}
					onBack={handleBackToType}
				/>
			)}
			{step === 2 && (
				<PropertyInfoStep
					propertyType={propertyType}
					saleOrRent={saleOrRent}
					onBack={handleBackToSaleRent}
				/>
			)}
		</div>
	);
};

export default AddPropertyForm;
