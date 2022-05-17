import { CellRenderFN, OperationsButtonConfig, TableConfig } from '@/components/v-table/typings';
import { BaseObj } from '../../../../../types/global';
import { TableColumnData } from '@arco-design/web-vue';
export interface ColumnData {
    record: BaseObj;
    column: TableColumnData;
    rowIndex: number;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config: TableConfig;
    columnData: ColumnData;
    extend?: CellRenderFN<BaseObj> | undefined;
    extendPostion?: "right" | "left" | "center" | undefined;
    updateButton?: OperationsButtonConfig | undefined;
    deleteButton?: OperationsButtonConfig | undefined;
}>, {
    extendPostion: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("updateData" | "deleteData")[], "updateData" | "deleteData", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    config: TableConfig;
    columnData: ColumnData;
    extend?: CellRenderFN<BaseObj> | undefined;
    extendPostion?: "right" | "left" | "center" | undefined;
    updateButton?: OperationsButtonConfig | undefined;
    deleteButton?: OperationsButtonConfig | undefined;
}>, {
    extendPostion: string;
}>>> & {
    onUpdateData?: ((...args: any[]) => any) | undefined;
    onDeleteData?: ((...args: any[]) => any) | undefined;
}, {
    extendPostion: "right" | "left" | "center";
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
