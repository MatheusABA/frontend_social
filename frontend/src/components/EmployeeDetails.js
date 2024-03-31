const EmployeeDetails = ({employee}) => {
    return (
        <div className="employee-details">
            <h4>{employee.name}</h4>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Job:</strong> {employee.job}</p>
        </div>
    )
}


export default EmployeeDetails