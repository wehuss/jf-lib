import { CellRenderFN, OperationsButtonConfig, TableColumnProps, TableConfig } from '../../../../../components/v-table/typings';
import { BaseObj } from '../../../../../types/global';
interface ColumnData {
    record: BaseObj;
    column: TableColumnProps;
    rowIndex: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    config: {
        type: null;
        required: true;
    };
    columnData: {
        type: ObjectConstructor;
        required: true;
    };
    extend: {
        type: null;
        required: false;
    };
    extendPostion: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    updateButton: {
        type: null;
        required: false;
    };
    deleteButton: {
        type: null;
        required: false;
    };
}, {
    props: {
        config: TableConfig;
        columnData: ColumnData;
        extend?: CellRenderFN<BaseObj> | undefined;
        extendPostion: 'center' | 'left' | 'right';
        updateButton?: OperationsButtonConfig | undefined;
        deleteButton?: OperationsButtonConfig | undefined;
    };
    emit: (event: "deleteData" | "updateData", ...args: any[]) => void;
    config: import("vue").Ref<TableConfig<BaseObj>>;
    columnData: import("vue").Ref<ColumnData>;
    extend: import("vue").Ref<CellRenderFN<BaseObj> | undefined> | undefined;
    extendRender: import("vue").ComputedRef<false | (() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>)>;
    updateData: () => Promise<void>;
    deleteData: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("deleteData" | "updateData")[], "deleteData" | "updateData", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: null;
        required: true;
    };
    columnData: {
        type: ObjectConstructor;
        required: true;
    };
    extend: {
        type: null;
        required: false;
    };
    extendPostion: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    updateButton: {
        type: null;
        required: false;
    };
    deleteButton: {
        type: null;
        required: false;
    };
}>> & {
    onDeleteData?: ((...args: any[]) => any) | undefined;
    onUpdateData?: ((...args: any[]) => any) | undefined;
}, {
    extendPostion: string;
}>;
export default _sfc_main;
