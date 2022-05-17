import { BaseObj } from '../../../types/global';
import { TableConfig } from '../typings';
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    renderParams: {
        type: null;
        required: false;
    };
}, {
    props: {
        type: 'Add' | 'Update';
        visible: boolean;
        title: string;
        renderParams?: BaseObj | undefined;
    };
    emit: (event: "update:visible" | "okEvent", ...args: any[]) => void;
    config: TableConfig<BaseObj> | undefined;
    form: import("vue").Ref<{
        formItem: {
            title: string;
            dataIndex: string;
            tooltip?: string | undefined;
        };
        render: ((params: BaseObj | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    rules: import("vue").Ref<{
        [x: string]: {
            type?: "string" | "number" | "boolean" | "object" | "array" | "email" | "url" | "ip" | undefined;
            required?: boolean | undefined;
            message?: string | undefined;
            length?: number | undefined;
            maxLength?: number | undefined;
            minLength?: number | undefined;
            match?: {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            } | undefined;
            uppercase?: boolean | undefined;
            lowercase?: boolean | undefined;
            min?: number | undefined;
            max?: number | undefined;
            equal?: number | undefined;
            positive?: boolean | undefined;
            negative?: boolean | undefined;
            true?: boolean | undefined;
            false?: boolean | undefined;
            includes?: any[] | undefined;
            deepEqual?: any;
            empty?: boolean | undefined;
            hasKeys?: string[] | undefined;
            validator?: ((value: any, callback: (error?: string | undefined) => void) => void) | undefined;
        }[];
    }>;
    hasTooltip: import("vue").Ref<boolean>;
    resetFormData: () => void;
    _visible: import("vue").WritableComputedRef<boolean>;
    formRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            layout: "inline" | "horizontal" | "vertical";
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
            layout: "inline" | "horizontal" | "vertical";
            model: Record<string, any>;
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        } & {
            disabled?: boolean | undefined;
            size?: "small" | "mini" | "medium" | "large" | undefined;
            onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
            onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            labelColStyle?: Record<string, any> | undefined;
            wrapperColStyle?: Record<string, any> | undefined;
            rules?: Record<string, import("@arco-design/web-vue").FieldRule<any> | import("@arco-design/web-vue").FieldRule<any>[]> | undefined;
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
            layout: "inline" | "horizontal" | "vertical";
            model: Record<string, any>;
            labelColProps: Record<string, any>;
            wrapperColProps: Record<string, any>;
            labelAlign: "right" | "left";
            autoLabelWidth: boolean;
        } & {
            disabled?: boolean | undefined;
            size?: "small" | "mini" | "medium" | "large" | undefined;
            onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
            onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
            labelColStyle?: Record<string, any> | undefined;
            wrapperColStyle?: Record<string, any> | undefined;
            rules?: Record<string, import("@arco-design/web-vue").FieldRule<any> | import("@arco-design/web-vue").FieldRule<any>[]> | undefined;
        }> & {
            onSubmit?: ((...args: any[]) => any) | undefined;
            onSubmitSuccess?: ((...args: any[]) => any) | undefined;
            onSubmitFailed?: ((...args: any[]) => any) | undefined;
        }, {
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            handleSubmit: (e: Event) => void;
            innerValidate: (callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
            innerValidateField: (field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
            innerResetFields: () => void;
            innerClearValidate: () => void;
            innerSetFields: (data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>) => void;
        }, unknown, {}, {
            validate(callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
            validateField(field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
            resetFields(): void;
            clearValidate(): void;
            setFields(data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "submitSuccess" | "submitFailed")[], string, {
            disabled: boolean;
            layout: "inline" | "horizontal" | "vertical";
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
        layout: "inline" | "horizontal" | "vertical";
        model: Record<string, any>;
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "right" | "left";
        autoLabelWidth: boolean;
    } & {
        disabled?: boolean | undefined;
        size?: "small" | "mini" | "medium" | "large" | undefined;
        onSubmit?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
        onSubmitSuccess?: import("@arco-design/web-vue/es/_utils/types").EmitType<(values: any) => void> | undefined;
        onSubmitFailed?: import("@arco-design/web-vue/es/_utils/types").EmitType<(data: any) => void> | undefined;
        labelColStyle?: Record<string, any> | undefined;
        wrapperColStyle?: Record<string, any> | undefined;
        rules?: Record<string, import("@arco-design/web-vue").FieldRule<any> | import("@arco-design/web-vue").FieldRule<any>[]> | undefined;
    }> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
        onSubmitSuccess?: ((...args: any[]) => any) | undefined;
        onSubmitFailed?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
        innerValidateField: (field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined) => Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
        innerResetFields: () => void;
        innerClearValidate: () => void;
        innerSetFields: (data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>) => void;
    }> & {
        validate(callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
        validateField(field: string | string[], callback?: ((errors: Record<string, import("@arco-design/web-vue").ValidatedError> | undefined) => void) | undefined): Promise<Record<string, import("@arco-design/web-vue").ValidatedError> | undefined>;
        resetFields(): void;
        clearValidate(): void;
        setFields(data: Record<string, import("@arco-design/web-vue/es/form/interface").FieldData>): void;
    } & import("vue").ComponentCustomProperties) | undefined>;
    handleOk: (done: (closed: boolean) => void) => void;
    handleClose: () => void;
    getRenderFunction: (render: import("../typings").FormRender<BaseObj>, renderParams?: BaseObj | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "okEvent")[], "update:visible" | "okEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    renderParams: {
        type: null;
        required: false;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onOkEvent?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
