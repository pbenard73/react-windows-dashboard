export default Windows;
declare class Windows {
    constructor(props: any);
    ref: any;
    state: {
        windows: {};
        active: any;
    };
    windowStyle: {
        border: string;
        height: string;
        width: string;
        background: string;
        borderRadius: string;
    };
    classNames: {
        window_active: string;
    };
    onWindowClose(uuid: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    toggleActive(id: any): void;
    removeExisting(uuid: any): void;
    checkNewWindows(): true | string[];
    updateWindows(): void;
    render(): any;
}
