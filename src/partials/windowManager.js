import Installation from "./../windows/Installation"
import StartContext from "./../windows/StartContext"
import startDashboard from "./startDashboard"
import Decorator from "./../windows/Decorator"
import Options from "./../windows/Options"
import Ordering from "./../windows/Ordering"

const WindowManager = {
    ...startDashboard,
    openInstallationBindThis() {
        const windowData = {
            uuid: "installation",
            title: "Installation",
            component: <Installation />,
            center: true,
        }

        this.props.addWindows(windowData)
    },
    openStartContextBindThis() {
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

        this.props.addWindows(windowData)
    },
    openOptionsBindThis() {
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

        this.props.addWindows(windowData)
    },
    openDecoratorBindThis() {
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

        this.props.addWindows(windowData)
    },
    openOrderingBindThis() {
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

        this.props.addWindows(windowData)
    },
}

export default WindowManager
