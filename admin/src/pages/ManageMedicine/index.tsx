import React, { useState, useEffect } from "react";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import Pagination from "../../components/Pagination";
import PaginationFilter from "../../components/PaginationFilter";
import ManageMedicineTable from "./ManageMedicineTable";
import { Button } from "../../styles/UI/Button/index.styled";
import {
  ManageMedicineBox,
  ManageMedicineHeader,
  ManageMedicineTitle,
  ManageMedicinePaginationBox,
} from "./index.styled";
import { IMedicine } from "../../redux/medicine";

const ManageMedicine = () => {
  const medicines = useSelector((state: RootState) => state.medicine.medicines);
  const [paginatedMedicines, setPaginatedMedicines] = useState<IMedicine[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    const endOffset = pageOffset + itemsPerPage;
    setPaginatedMedicines(medicines.slice(pageOffset, endOffset));
    setPageCount(Math.ceil(medicines.length / itemsPerPage));
  }, [itemsPerPage, medicines, pageOffset]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % medicines.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPageOffset(newOffset);
  };
  const updateItemsPerPage = (itemPerPageAmount: number) =>
    setItemPerPage(itemPerPageAmount);
  return (
    <ManageMedicineBox>
      <ManageMedicineHeader>
        <Link to="/addMedicine">
          <Button round>
            <GiMedicines />
            Add a New Medicine
          </Button>
        </Link>
        <ManageMedicineTitle>All Medicines</ManageMedicineTitle>
      </ManageMedicineHeader>
      <ManageMedicineTable medicines={paginatedMedicines} />
      {medicines.length > 5 && (
        <ManageMedicinePaginationBox>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          <PaginationFilter
            updateItemsPerPage={updateItemsPerPage}
            itemType="Medicines"
          />
        </ManageMedicinePaginationBox>
      )}
    </ManageMedicineBox>
  );
};

export default ManageMedicine;
