export default Window;
declare class Window {
    constructor(props: any);
    state: {
        full: boolean;
    };
    onResizeStart(e: any): void;
    toggle(): void;
    onStart(e: any): boolean;
    options: any;
    resizable: boolean;
    size: any;
    minSize: any;
    sizableOptions: {
        width: any;
        height: any;
        minConstraints: any;
        onResizeStart: (e: any) => void;
        resizeHandles: any;
        style: any;
    };
    ref: any;
    getBaseActions(): any;
    getExtraActions(props: any): any;
    getBaseWindow(props?: any): JSX.Element;
    renderInnerWindow(): any;
    render(): JSX.Element;
}
