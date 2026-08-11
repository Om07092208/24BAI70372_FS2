import CourseCatalog from "./CourseCatalog";

function Dashboard(props) {
    return (
        <div>
            <CourseCatalog {...props} />
        </div>
    );
}

export default Dashboard;