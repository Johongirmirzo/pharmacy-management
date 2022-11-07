interface ISale {
    price: number;
    total: number;
    quantity: number;
    soldDate: string;
}
  
interface IDataset {
    data: number[];
    label: string;
    backgroundColor: string;
    fill: boolean;
    borderColor: [string];
    borderWidth: number;
    color: string;
}
  
export interface ILineChart {
    labels: string[];
    datasets: IDataset[];
}