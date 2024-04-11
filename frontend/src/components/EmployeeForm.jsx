import { useState } from "react";

const EmployeeForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const employee = {name, email, job}

        const response = await fetch("http://localhost:3030/api/employees/", {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName('');
            setEmail('');
            setJob('');
            setError(null);
            console.log('New employee added', json);
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new employee</h3>

            <label>Employee name:</label>
            <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Email:</label>
            <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Job:</label>
            <input
            type="text"
            onChange={(e) => setJob(e.target.value)}
            value={job}
            />

            <button>Add Employee</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}



export default EmployeeForm;