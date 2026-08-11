function StudentProfile({ user }) {
    return (
        <div className="profile">
            <h3>Student Details (Prop Drilling)</h3>

            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Program:</b> {user.program}</p>
        </div>
    );
}

export default StudentProfile;