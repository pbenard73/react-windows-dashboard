import Installation from "./../windows/Installation"
import StartContext from "./../windows/StartContext"
import startDashboard from "./startDashboard"
import customDecorator from "./customDecorator"
import Decorator from "./../windows/Decorator"
import Options from "./../windows/Options"
import Ordering from "./../windows/Ordering"
import ExtraActions from "./../windows/ExtraActions"
import FocusWindows from "./../windows/FocusWindows"
import { useApp } from "../redux/appSlice"

const useWindowManager = () => {
    const app = useApp()

    return {
    ...customDecorator(app),
    ...startDashboard(app),
    openInstallation() {
        const windowData = {
            uuid: "installation",
            title: "Installation",
            component: <Installation />,
            center: true,
        }
console.log('openInstallation')
        app.addWindows(windowData)
    },
    openFocusWindows() {
        const windowData = {
            uuid: "focus_windows",
            title: "Focus Windows Styling",
            component: <FocusWindows />,
            center: true,
            options: {
                size: [420, 370],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },
    openExtraActions() {
        const windowData = {
            uuid: "extra_actions",
            title: "Window Extra Actions",
            component: <ExtraActions />,
            center: true,
            actions: () => <span style={{margin:'0 5px', cursor:'pointer'}} onClick={() => alert("Why did you clicked ?")}>⛔</span>,
            options: {
                size: [700, 485],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },
    openStartContext() {
        const windowData = {
            uuid: "start_context",
            title: "Get Started : Create Context",
            component: <StartContext />,
            center: true,
            options: {
                size: [700, 485],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },
    openOptions() {
        const windowData = {
            uuid: "options",
            title: "Components Options",
            component: <Options />,
            center: true,
            options: {
                size: [600, 300],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },
    openDecorator() {
        const windowData = {
            uuid: "decorator",
            title: "Customize the windows decorator",
            component: <Decorator />,
            center: true,
            options: {
                size: [712, 475],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },
    openOrdering() {
        const windowData = {
            uuid: "ordering",
            title: "Managing the Windows (Order & Active)",
            component: <Ordering />,
            center: true,
            options: {
                size: [712, 475],
                minSize: [300, 100],
            },
        }

        app.addWindows(windowData)
    },

    }
}

export default useWindowManager
