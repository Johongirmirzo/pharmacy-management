import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCompany as addCompany } from "../../../redux/company";
import { createCompany } from "../../../api/company";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormFieldError,
  FormButton,
} from "../../../styles/UI/Form/index.styled";

const AddCompanyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  const handleAddCompanySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (companyName.trim().length < 2) {
      setError("Minimum company name length is 2");
    } else if (companyName.trim().length > 100) {
      setError("Maximum company name length is 100");
    } else {
      (async () => {
        try {
          setIsLoading(true);
          const companyResponse = await createCompany(companyName);
          setIsLoading(false);
          dispatch(addCompany({ newCompany: companyResponse.data }));
          navigate("/manageCompany");
        } catch (err) {
          setIsLoading(false);
          console.error(err);
        }
      })();
      setCompanyName("");
    }
  };
  const handleUpdateCompanyFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyName(e.target.value);
    console.log(companyName);
    if (companyName.trim().length > 2 && companyName.trim().length < 100) {
      setError("");
    } else if (companyName.trim().length < 2) {
      setError("Minimum company name length is 2");
    } else if (companyName.trim().length > 100) {
      setError("Maximum company name length is 100");
    }
  };
  return (
    <Form onSubmit={handleAddCompanySubmit}>
      <FormControl>
        <FormLabel htmlFor="company">Company Name</FormLabel>
        <FormInput
          type="text"
          id="company"
          onChange={handleUpdateCompanyFieldChange}
          value={companyName}
          placeholder="Enter Company Name"
        />
        {error && <FormFieldError>{error}</FormFieldError>}
      </FormControl>
      <FormButton
        isLoading={isLoading ? true : false}
        disabled={isLoading ? true : false}
      >
        Add Company
      </FormButton>
    </Form>
  );
};

export default AddCompanyForm;
