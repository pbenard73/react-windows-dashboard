import CreateDashboard from "./../windows/CreateDashboard"

const action = app => ({
    openCreateDashboard: function () {
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

        app.addWindows(windowData)
    },
})

export default action
