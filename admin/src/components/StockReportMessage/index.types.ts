export type StockReportMessageProps = {
    pharmacist?: string;
    message: string;
    stockReportDate: {
        from: string;
        to: string;
    }
}