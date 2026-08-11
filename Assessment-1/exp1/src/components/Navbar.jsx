function Navbar({ user, enrolledCount }) {
    return (
        <div className="navbar">
            <h2>SkillNest - Online Learning Platform</h2>

            <p><b>Welcome, {user.name}</b></p>

            <p>
                Program: {user.program} |
                <span style={{ marginLeft: "10px" }}>
                    Enrolled: {enrolledCount}
                </span>
            </p>
        </div>
    );
}

export default Navbar;