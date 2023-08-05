declare const _default: import("vue").DefineComponent<{
    container: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string>, string | (() => string) | undefined, unknown, unknown, unknown>;
    disabled: import("../../../utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
    style: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
    zIndex: import("../../../utils").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
}, {
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
    containerRef: import("vue").Ref<HTMLElement | undefined>;
    containerStyle: import("vue").ComputedRef<{}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    container: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string>, string | (() => string) | undefined, unknown, unknown, unknown>;
    disabled: import("../../../utils").BuildPropReturn<BooleanConstructor, boolean | (() => false) | (() => true) | undefined, unknown, unknown, unknown>;
    style: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<import("vue").StyleValue>, string | import("vue").CSSProperties | (() => string) | (() => import("vue").CSSProperties) | (() => import("vue").StyleValue[]) | undefined, unknown, unknown, unknown>;
    zIndex: import("../../../utils").BuildPropReturn<StringConstructor, string | (() => string) | undefined, unknown, unknown, unknown>;
}>>, {
    disabled: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    zIndex: string;
    style: import("vue").StyleValue;
    container: string;
}>;
export default _default;
