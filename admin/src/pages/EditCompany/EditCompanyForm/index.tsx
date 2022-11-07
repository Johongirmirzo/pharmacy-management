import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCompany as updateCompany } from "../../../redux/company";
import { editCompany, getCompany } from "../../../api/company";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormFieldError,
  FormButton,
} from "../../../styles/UI/Form/index.styled";

const EditCompanyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companyId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCompany();
  }, [companyId]);

  const fetchCompany = async () => {
    try {
      if (companyId) {
        const companyResponse = await getCompany(companyId);
        setCompanyName(companyResponse.data.name);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCompanySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (companyName.trim().length < 2) {
      setError("Minimum company name length is 2");
    } else if (companyName.trim().length > 100) {
      setError("Maximum company name length is 100");
    } else {
      (async () => {
        try {
          setIsLoading(true);
          if (companyId) {
            const companyResponse = await editCompany(companyName, companyId);
            setIsLoading(false);
            dispatch(updateCompany({ editedCompany: companyResponse.data }));
            navigate("/manageCompany");
          }
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
    <Form onSubmit={handleEditCompanySubmit}>
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
        Edit Company
      </FormButton>
    </Form>
  );
};

export default EditCompanyForm;
