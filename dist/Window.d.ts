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
    minSize: any;
    resizable: boolean;
    sizableOptions: {
        width: any;
        height: any;
        minConstraints: any;
        onResizeStart: (e: any) => void;
        style: any;
    };
    ref: any;
    getBaseActions(): any;
    getExtraActions(props: any): any;
    getBaseWindow(props?: any): any;
    renderInnerWindow(): any;
    render(): any;
}
