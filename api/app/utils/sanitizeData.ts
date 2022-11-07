import {encode} from "html-entities";

const sanitizeData = (data: string) => encode(data);

export default sanitizeData;