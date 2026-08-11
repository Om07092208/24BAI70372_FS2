import CourseList from "./CourseList";

function CourseCatalog(props) {
    return (
        <div>
            <h2>COURSE CATALOG</h2>

            <CourseList {...props} />
        </div>
    );
}

export default CourseCatalog;