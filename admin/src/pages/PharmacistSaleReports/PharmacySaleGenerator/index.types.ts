
interface IPharmacist {
    _id: string;
    fullname: string;
    username: string;
}

interface IPharmacistSaleDateField {
    from: string;
    to: string;
    pharmacistId: string;
}

export type PharmacySaleGeneratorProps = {
    isLoading: boolean;
    pharmacists: IPharmacist[];
    fetchPharmacistSaleReport: (reportData: IPharmacistSaleDateField) => void;
}