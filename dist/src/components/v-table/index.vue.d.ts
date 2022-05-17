import { Ref, PropType } from "vue";
import { TableConfig } from "./typings";
import { BaseObj } from "../../types/global";
declare const _default: import("vue").DefineComponent<{
    config: PropType<TableConfig<BaseObj>>;
}, {
    contentRef: Ref<{
        getTableHeight: () => number;
    } | undefined>;
    get: () => Promise<void>;
    resetSearchParams: (() => void) | undefined;
    setSelectedRowKeys: (keys: string[]) => void;
    getSelectedRowKeys: () => string[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: PropType<TableConfig<BaseObj>>;
}>>, {}>;
export default _default;
