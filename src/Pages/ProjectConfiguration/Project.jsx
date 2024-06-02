import React from 'react';
import './ProjectConfiguration.css';

const Project = () => (
    <div className="content">
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Remark</th>
                    <th>Program</th>
                    <th>Project Category</th>
                    <th>Customer</th>
                    <th>SW</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" placeholder="Serial Number" /></td>
                    <td><input type="text" /></td>
                    <td>
                        <select>
                            <option>CAP</option>
                            <option>ITP</option>
                            <option>CTP</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option>C0-Project</option>
                            <option>C3-Assigned</option>
                            <option>C5-Approved</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option>BMW</option>
                            <option>DAI</option>
                            <option>DFM</option>
                            <option>DFLZ</option>
                            <option>Porches</option>
                            <option>PSA</option>
                            <option>RSA</option>
                        </select>
                    </td>
                    <td><input type="text" /></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Project;
