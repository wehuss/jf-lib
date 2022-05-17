import { BaseObj } from '../../types/global';
import { Columns } from './typings';
export declare function useTableForm(columns: Array<Columns> | undefined, type: 'Search' | 'Update' | 'Add'): {
    resetFormData(): void;
    form: import("vue").Ref<{
        formItem: {
            title: string;
            dataIndex: string;
            tooltip?: string | undefined;
        };
        render: ((params: BaseObj | undefined) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) | {
            type: import("./typings").FormRenderType;
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
    defaultValues: import("vue").Ref<{
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
};
