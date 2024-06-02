import React from 'react';
import './ProjectConfiguration.css';

const GPMS = () => (
    <div className="content">
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Quotation</th>
                    <th>Serial Development of Product & Production</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" /></td>
                    <td>
                        <div>
                            <label>All</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>Q2</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>A</label>
                            <input type="checkbox" />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label>SD1</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>SD2</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>SD3</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>B</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>SD4</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>C</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>SD5</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>D</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                            <label>SD6</label>
                            <input type="checkbox" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default GPMS;
