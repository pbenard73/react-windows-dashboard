export default Window;
declare class Window {
    constructor(props: any);
    state: {
        full: boolean;
    };
    onResizeStart(e: any): void;
    toggle(): void;
    options: any;
    minSize: any;
    resizable: boolean;
    sizableOptions: {
        width: any;
        height: any;
        minConstraints: any;
        onResizeStart: (e: any) => void;
    };
    render(): any;
}
