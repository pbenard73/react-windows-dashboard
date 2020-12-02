export default Windows;
declare class Windows {
    constructor(props: any);
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
    onWindowClose(uuid: any): void;
    toggleActive(id: any): void;
    render(): any;
}
