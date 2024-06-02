import React from 'react';
import './ProjectConfiguration.css';

const Product = () => (
    <div className="content">
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>TM-Remark</th>
                    <th>Type</th>
                    <th>Product</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td>
                        <select>
                            <option>DCT</option>
                            <option>HDT</option>
                            <option>DHD</option>
                            <option>DCL</option>
                            <option>MTx</option>
                            <option>eDM</option>
                        </select>
                    </td>
                    <td>
                        <select>
                            <option>4HD445</option>
                            <option>8ASer32</option>
                            <option>D93ideD</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Product;
