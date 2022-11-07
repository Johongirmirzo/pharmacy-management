interface IReport {
    from: string;
    to: string;
}

export type SaleReportGeneratorProps = {
    isLoading: boolean;
    fetchSaleReport: (reportData: IReport)=>void;
}