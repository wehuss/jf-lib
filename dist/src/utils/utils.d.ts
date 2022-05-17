import { FormRender } from '../components/v-table/typings';
export declare const toPascalCase: (text: string) => string;
export declare const filterTree: (_tree: any[], filterValue: string | boolean | number, fields: {
    filterField: string;
    children: string;
    key?: string;
}) => {
    tree: any[];
    keys: any[];
};
export declare const getFormInput: (props: string | any) => FormRender;
