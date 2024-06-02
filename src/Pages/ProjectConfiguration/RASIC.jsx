import React from 'react';
import './ProjectConfiguration.css';

const RASIC = () => (
    <div className="content">
        <table>
            <thead>
                <tr>
                    <th>Task-ID</th>
                    <th>Function</th>
                    <th>Manager</th>
                    <th>Share</th>
                </tr>
            </thead>
            <tbody>
                {[
                    { id: 'EPE', function: 'Engineering Project Manager', managers: ['H. Germplini', 'W. Guja', 'J. Bausch', 'A. Schick'] },
                    { id: 'eQA', function: 'Quality Assurance', managers: ['T. Hollneck', 'W. Nixdorf', 'H. Germplini'] },
                    // Add other task details similarly
                ].map(task => (
                    <tr key={task.id}>
                        <td><input type="text" value={task.id} readOnly /></td>
                        <td><input type="text" value={task.function} readOnly /></td>
                        <td>
                            {task.managers.map((manager, index) => (
                                <select key={index}>
                                    <option>{manager}</option>
                                    {/* Add more manager options if needed */}
                                </select>
                            ))}
                        </td>
                        <td>
                            <input type="number" defaultValue="100" />
                            <input type="number" />
                            <input type="number" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default RASIC;
