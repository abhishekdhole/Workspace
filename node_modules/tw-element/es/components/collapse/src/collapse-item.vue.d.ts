import type { PropType } from 'vue';
import type { CollapseProvider } from './collapse.type';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: PropType<string | number>;
        default: () => number;
    };
    disabled: BooleanConstructor;
}, {
    isActive: import("vue").ComputedRef<boolean>;
    contentWrapStyle: import("vue").Ref<{
        height: string;
        display: string;
    }>;
    contentHeight: import("vue").Ref<number>;
    focusing: import("vue").Ref<boolean>;
    isClick: import("vue").Ref<boolean>;
    id: import("vue").Ref<number>;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
    collapse: CollapseProvider | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: PropType<string | number>;
        default: () => number;
    };
    disabled: BooleanConstructor;
}>>, {
    disabled: boolean;
    name: string | number;
    title: string;
}>;
export default _default;
