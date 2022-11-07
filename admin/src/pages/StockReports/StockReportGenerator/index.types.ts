export type StockReportGeneratorProps = {
    fetchStockReport: (reportData: {from: string, to: string})=> void;
    isLoading: boolean;
}