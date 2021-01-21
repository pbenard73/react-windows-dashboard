import CreateDashboard from "./../windows/CreateDashboard"

const action = {
    openCreateDashboardBindThis: function () {
        const windowData = {
            uuid: "start_dashboard",
            title: "Get Started : Create Dashboard",
            component: <CreateDashboard />,
            center: true,
            options: {
                size: [700, 485],
                minSize: [300, 100],
            },
        }

        this.props.addWindows(windowData)
    },
}

export default action
