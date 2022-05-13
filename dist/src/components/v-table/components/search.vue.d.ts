import { PropType } from 'vue';
import { SearchColSpan, TableConfig } from '../typings';
declare const _sfc_main: import("vue").DefineComponent<{
    config: PropType<TableConfig<import("../../../types/global").BaseObj>>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        config: PropType<TableConfig<import("../../../types/global").BaseObj>>;
    }>> & {
        onSearch?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "search", ...args: any[]) => void;
    form: import("vue").Ref<{
        formItem: {
            title: string;
            dataIndex: string;
            tooltip?: string | undefined;
        };
        render: ((params: import("../../../types/global").BaseObj | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | {
            type: import("../typings").FormRenderType;
            props: {
                [x: string]: unknown;
            };
        };
        searchColSpan?: number | {
            span: number;
            formItem?: {
                labelColSpan?: number | undefined;
                wrapperColSpan?: number | undefined;
            } | undefined;
        } | undefined;
    }[]>;
    formData: import("vue").Ref<{
        [x: string]: any;
    }>;
    resetFormData: () => void;
    formRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            layout: "horizontal" | "vertical" | "inline";
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        }> & Omit<Readonly<{
            model?: unknown;
            layout?: unknown;
            size?: unknown;
            labelColProps?: unknown;
            wrapperColProps?: unknown;
            labelColStyle?: unknown;
            wrapperColStyle?: unknown;
            labelAlign?: unknown;
            disabled?: unknown;
            rules?: unknown;
            autoLabelWidth?: unknown;
            onSubmit?: unknown;
            onSubmitSuccess?: unknown;
            onSubmitFailed?: unknown;
        } & {
            layout: "horizontal" | "vertical" | "inline";
            model: Record<string, any>;
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        } & {
            size?: "small" | "mini" | "medium" | "large" | undefined;
            disabled?: boolean | undefined;
            onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
            onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            labelColStyle?: Record<string, any> | undefined;
            wrapperColStyle?: Record<string, any> | undefined;
            rules?: Record<string, import("@arco-design/web-vue/es/form").FieldRule<any> | import("@arco-design/web-vue/es/form").FieldRule<any>[]> | undefined;
        }> & {
            onSubmit?: ((...args: any[]) => any) | undefined;
            onSubmitSuccess?: ((...args: any[]) => any) | undefined;
            onSubmitFailed?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "layout" | "labelColProps" | "wrapperColProps" | "labelAlign" | "disabled" | "autoLabelWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "submit" | "submitSuccess" | "submitFailed", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            model?: unknown;
            layout?: unknown;
            size?: unknown;
            labelColProps?: unknown;
            wrapperColProps?: unknown;
            labelColStyle?: unknown;
            wrapperColStyle?: unknown;
            labelAlign?: unknown;
            disabled?: unknown;
            rules?: unknown;
            autoLabelWidth?: unknown;
            onSubmit?: unknown;
            onSubmitSuccess?: unknown;
            onSubmitFailed?: unknown;
        } & {
            layout: "horizontal" | "vertical" | "inline";
            model: Record<string, any>;
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        } & {
            size?: "small" | "mini" | "medium" | "large" | undefined;
            disabled?: boolean | undefined;
            onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
            onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            labelColStyle?: Record<string, any> | undefined;
            wrapperColStyle?: Record<string, any> | undefined;
            rules?: Record<string, import("@arco-design/web-vue/es/form").FieldRule<any> | import("@arco-design/web-vue/es/form").FieldRule<any>[]> | undefined;
        }> & {
            onSubmit?: ((...args: any[]) => any) | undefined;
            onSubmitSuccess?: ((...args: any[]) => any) | undefined;
            onSubmitFailed?: ((...args: any[]) => any) | undefined;
        }, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            handleSubmit: (e: Event) => void;
            innerValidate: (callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
            innerValidateField: (field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
            innerResetFields: () => void;
            innerClearValidate: () => void;
            innerSetFields: (data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>) => void;
        }, unknown, {}, {
            validate(callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
            validateField(field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
            resetFields(): void;
            clearValidate(): void;
            setFields(data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "submitSuccess" | "submitFailed")[], string, {
            disabled: boolean;
            layout: "horizontal" | "vertical" | "inline";
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[] | undefined;
            created?: (() => void) | (() => void)[] | undefined;
            beforeMount?: (() => void) | (() => void)[] | undefined;
            mounted?: (() => void) | (() => void)[] | undefined;
            beforeUpdate?: (() => void) | (() => void)[] | undefined;
            updated?: (() => void) | (() => void)[] | undefined;
            activated?: (() => void) | (() => void)[] | undefined;
            deactivated?: (() => void) | (() => void)[] | undefined;
            beforeDestroy?: (() => void) | (() => void)[] | undefined;
            beforeUnmount?: (() => void) | (() => void)[] | undefined;
            destroyed?: (() => void) | (() => void)[] | undefined;
            unmounted?: (() => void) | (() => void)[] | undefined;
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        model?: unknown;
        layout?: unknown;
        size?: unknown;
        labelColProps?: unknown;
        wrapperColProps?: unknown;
        labelColStyle?: unknown;
        wrapperColStyle?: unknown;
        labelAlign?: unknown;
        disabled?: unknown;
        rules?: unknown;
        autoLabelWidth?: unknown;
        onSubmit?: unknown;
        onSubmitSuccess?: unknown;
        onSubmitFailed?: unknown;
    } & {
        layout: "horizontal" | "vertical" | "inline";
        model: Record<string, any>;
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "right" | "left";
        autoLabelWidth: boolean;
    } & {
        size?: "small" | "mini" | "medium" | "large" | undefined;
        disabled?: boolean | undefined;
        onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
        onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
        onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
        labelColStyle?: Record<string, any> | undefined;
        wrapperColStyle?: Record<string, any> | undefined;
        rules?: Record<string, import("@arco-design/web-vue/es/form").FieldRule<any> | import("@arco-design/web-vue/es/form").FieldRule<any>[]> | undefined;
    }> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
        onSubmitSuccess?: ((...args: any[]) => any) | undefined;
        onSubmitFailed?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
        innerValidateField: (field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
        innerResetFields: () => void;
        innerClearValidate: () => void;
        innerSetFields: (data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>) => void;
    }> & {
        validate(callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
        validateField(field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue/es/form").ValidatedError> | undefined>;
        resetFields(): void;
        clearValidate(): void;
        setFields(data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>): void;
    } & import("vue").ComponentCustomProperties) | undefined>;
    search: () => void;
    reset: () => void;
    getSpan: (config: SearchColSpan | undefined) => number;
    formItemSpanSize: {
        label: number;
        wrapper: number;
    };
    getFormItemSpan: (config: SearchColSpan | undefined, type: 'label' | 'wrapper') => number;
    dividerStyle: import("vue").ComputedRef<{
        marginBottm: string;
        left: string;
        width: string;
        minWidth: string;
    } | {
        marginBottm?: undefined;
        left?: undefined;
        width?: undefined;
        minWidth?: undefined;
    }>;
    isVertical: import("vue").ComputedRef<boolean>;
    getRenderFunction: (render: import("../typings").FormRender<import("../../../types/global").BaseObj>, renderParams?: import("../../../types/global").BaseObj | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: PropType<TableConfig<import("../../../types/global").BaseObj>>;
}>> & {
    onSearch?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
