function CourseList({ user, enrolledCount, setEnrolledCount }) {

    const courses = [
        { id: 1, name: "React Basics", price: 999 },
        { id: 2, name: "Node.js Essentials", price: 1199 },
        { id: 3, name: "UI/UX Design", price: 799 }
    ];

    function enroll() {
        setEnrolledCount(prev => prev + 1);
    }

    return (
        <div className="catalog">
            <h2>Course Catalog</h2>

            {courses.map((course) => (
                <div key={course.id} className="course">

                    <div>
                        <b>{course.name}</b><br />
                        ₹{course.price}
                    </div>

                    <button onClick={enroll}>
                        Enroll
                    </button>

                </div>
            ))}
        </div>
    );
}

export default CourseList;