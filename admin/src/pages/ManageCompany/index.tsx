import React, { useState, useEffect } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Button } from "../../styles/UI/Button/index.styled";
import Pagination from "../../components/Pagination";
import PaginationFilter from "../../components/PaginationFilter";
import ManageCompanyTable from "./ManageCompanyTable";
import {
  ManageCompanyBox,
  ManageCompanyHeader,
  ManageCompanyTitle,
  ManageCompanyPaginationBox,
} from "./index.styled";
import { IMedicalCompany } from "../../redux/company";

const ManageCompany = () => {
  const companies = useSelector((state: RootState) => state.company.companies);
  const [paginatedCompanies, setPaginatedCompanies] = useState<
    IMedicalCompany[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    const endOffset = pageOffset + itemsPerPage;
    setPaginatedCompanies(companies.slice(pageOffset, endOffset));
    setPageCount(Math.ceil(companies.length / itemsPerPage));
  }, [itemsPerPage, companies, pageOffset]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % companies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };
  const updateItemsPerPage = (itemPerPageAmount: number) =>
    setItemPerPage(itemPerPageAmount);
  return (
    <ManageCompanyBox>
      <ManageCompanyHeader>
        <Link to="/addCompany">
          <Button round>
            <HiOutlineBuildingOffice />
            Add a New Company
          </Button>
        </Link>
        <ManageCompanyTitle>Medical Companies</ManageCompanyTitle>
      </ManageCompanyHeader>
      <ManageCompanyTable companies={paginatedCompanies} />
      {companies.length > 5 && (
        <ManageCompanyPaginationBox>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          <PaginationFilter
            updateItemsPerPage={updateItemsPerPage}
            itemType="Companies"
          />
        </ManageCompanyPaginationBox>
      )}
    </ManageCompanyBox>
  );
};

export default ManageCompany;
