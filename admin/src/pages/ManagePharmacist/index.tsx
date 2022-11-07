import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Pagination from "../../components/Pagination";
import PaginationFilter from "../../components/PaginationFilter";
import ManagePharmacistTable from "./ManagePharmacistTable";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  PharmacistSection,
  PharmacistHeader,
  PharmacistTitle,
  PharmacistBox,
} from "./index.styled";
import { IPharmacist } from "../../redux/pharmacist";

const ManagePharmacist = () => {
  const pharmacists = useSelector(
    (state: RootState) => state.pharmacists.pharmacists
  );
  const [paginatedPharmacists, setPaginatedPharmacists] = useState<
    IPharmacist[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    const endOffset = pageOffset + itemsPerPage;
    setPaginatedPharmacists(pharmacists.slice(pageOffset, endOffset));
    setPageCount(Math.ceil(pharmacists.length / itemsPerPage));
  }, [itemsPerPage, pharmacists, pageOffset]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % pharmacists.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };
  const updateItemsPerPage = (itemPerPageAmount: number) =>
    setItemPerPage(itemPerPageAmount);

  return (
    <PharmacistSection>
      <PharmacistHeader>
        <Link to="/addPharmacist">
          <Button round={true}>
            <AiOutlineUserAdd /> Add a New Pharmacist
          </Button>
        </Link>
        <PharmacistTitle>All Pharmacists</PharmacistTitle>
      </PharmacistHeader>
      <ManagePharmacistTable pharmacists={paginatedPharmacists} />
      <PharmacistBox>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        <PaginationFilter
          updateItemsPerPage={updateItemsPerPage}
          itemType="Pharmacists"
        />
      </PharmacistBox>
    </PharmacistSection>
  );
};

export default ManagePharmacist;
