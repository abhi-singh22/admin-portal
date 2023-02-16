import './Home.css';
import Select from './Select';
import React, { useState } from 'react';
import axios from "axios";

function Home() {
    const initialErrorMessege = {
        firstName: false,
        lastName: false,
        gender: false,
        dob: false,
        race: false,
        carrierName: false,
        memberId: false,
    };

    const [formValues, setFormValues] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);
    const [isInsuranceValid, setIsInsuranceValid] = useState();
    const [errorMessege, setErrorMessege] = useState(initialErrorMessege);

    const genderOptions = [{ label: 'Select', value: '' }, { label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Other', value: 'other' }]
    const raceOptions = [{ label: 'Select', value: '' }, { label: 'American Indian or Alaskan Native', value: 'americanIndian' }, { label: 'Asian', value: 'asian' }, { label: 'Black or African American', value: 'black' }, { label: 'White', value: 'white' }, { label: 'Decline to Answer', value: 'decline' }];
    const ethenticityOptions = [{ label: 'Select', value: '' }, { label: 'Hispanic or Latin', value: 'hispanic' }, { label: 'Non-Hispanic or Latin', value: 'nonHispanic' }, { label: 'Decline to Answer', value: 'decline' }];
    const carrierNameOptions = [{ label: 'Select', value: '' }, { label: 'Aetna', value: 'aetna' }, { label: 'BCBS', value: 'bcbs' }, { label: 'Kaiser', value: 'kaiser' }, { label: 'Optum', value: 'optum' }];
    const relationshipOptions = [{ label: 'Select', value: '' }, { label: 'Self', value: 'self' }, { label: 'Spouse', value: 'spouse' }, { label: 'Parent', value: 'parent' }, { label: 'Child', value: 'child' }, { label: 'Other', value: 'other' }];
    const mandatoryFields = ["firstName", "lastName", "gender", "dob", "race", "carrierName", "memberId"]
    const handleSubmit = async (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            url: 'https://eligibilitycheck.onrender.com/valid-insurance',
            data: formValues
        };
        axios
            .request(options)
            .then(function (response) {
                setIsInsuranceValid(response.data.message)
            })
            .catch(function (error) {
                new Error(error)
            });
        setTimeout(() => { setIsInsuranceValid() }, 6000)
    }

    function handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ ...formValues, [name]: value.trim() });
    }

    function showErrorMessege(e) {
        const name = e.target.name;
        const value = e.target.value.trim();
        setErrorMessege({ ...errorMessege, [name]: !value.length })
    }

    return (
        <div className="border-box">
            <form onSubmit={handleSubmit}>
                <div className="form-header">Patient Information</div>
                <div className="form-fields-class">
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="firstName">First Name<span className="req">*</span></label>
                            <input id="name" type="text" name="firstName" placeholder="First Name" onChange={(event) => handleUserInput(event)} onBlur={(event) => showErrorMessege(event)}></input>
                            {(errorMessege.firstName) && <span className="req">First Name is Required</span>}
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name<span className="req">*</span></label>
                            <input id="name" type="text" name="lastName" placeholder="Last Name" onChange={(event) => handleUserInput(event)} onBlur={(event) => showErrorMessege(event)}></input>
                            {(errorMessege.lastName) && <span className="req">Last Name is Required</span>}
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="gender">Gender<span className="req">*</span></label>
                            <Select options={genderOptions} handleInput={handleUserInput} name="gender" id="gender" showErrorMessege={showErrorMessege}/>
                            {(errorMessege.gender) && <span className="req">Gender is Required</span>}
                        </span>
                        <span>
                            <label htmlFor="dob">DOB<span className="req">*</span></label>
                            <input id="dob" type="date" name="dob" placeholder="MM/DD/YYYY" onChange={(event) => handleUserInput(event)} onBlur={(event) => showErrorMessege(event)}></input>
                            {(errorMessege.dob) && <span className="req">DOB is Required</span>}
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="race">Race<span className="req">*</span></label>
                            <Select options={raceOptions} handleInput={handleUserInput} name="race" id="race" showErrorMessege={showErrorMessege}/>
                            {(errorMessege.race) && <span className="req">Race is Required</span>}
                        </span>
                        <span>
                            <label htmlFor="ethenticity">Ethenticity</label>
                            <Select options={ethenticityOptions} handleInput={handleUserInput} name="ethenticity" id="ethenticity" />
                        </span>
                    </div>
                </div>
                <div className="form-header">Patient Insurance Information</div>
                <div className="form-fields-class">
                    <div className="carrierClass">
                        <span>
                            <label htmlFor="carrierName">Carrier Name<span className="req">*</span></label>
                            <Select options={carrierNameOptions} handleInput={handleUserInput} name="carrierName" id="carrierName" showErrorMessege={showErrorMessege}/>
                            {(errorMessege.carrierName) && <span className="req">Carrier Name is Required</span>}
                        </span>
                    </div>
                    <div className="fieldsRows">
                        <span>
                            <label htmlFor="memberId">Member ID<span className="req">*</span></label>
                            <input id="memberId" type="text" name="memberId" placeholder="Member ID" onChange={(event) => handleUserInput(event)} onBlur={(event) => showErrorMessege(event)}></input>
                            {(errorMessege.memberId) && <span className="req">Member ID is Required</span>}
                        </span>
                        <span>
                            <label htmlFor="groupNumber">Group Number</label>
                            <input id="groupNumber" type="text" name="groupNumber" placeholder="Group Number" onChange={(event) => handleUserInput(event)}></input>
                        </span>
                    </div>
                    <div className="carrierClass">
                        <span>
                            <label htmlFor="relationship">Relationship</label>
                            <Select options={relationshipOptions} handleInput={handleUserInput} name="relationship" id="relationship" />
                        </span>
                    </div >
                    <div className="message-box">
                        {(isInsuranceValid == 'valid') && <div className="valid-insurance-message message-box">
                            <span>'Valid Insurance' <br /> Patient Health Insurance Validated </span>
                        </div>}
                        {(isInsuranceValid == 'invalid') && <div className="invalid-insurance-message message-box">
                            <span>'Invalid Insurance' <br /> Please check details entered & Submit again </span>
                        </div>}
                    </div>
                    <div>
                        <button type="submit" disabled={!isFormValid} className="validate-buttom"><b>Validate Insurance</b></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;
