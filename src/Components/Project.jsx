import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, TextField, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel, Typography } from '@mui/material';

const Project = () => {
    const [selectedMenu, setSelectedMenu] = useState('Product');
    const [program, setProgram] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [customer, setCustomer] = useState('');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const menus = ['Product', 'Project', 'GPMS', 'RASIC'];

    const renderRightContent = () => {
        if (selectedMenu === 'Product') {
            return (
                <Box p={2}>
                    <Typography variant="h6">Product Details</Typography>
                    <TextField label="Apps" fullWidth margin="normal" />
                    <TextField label="eQuote No." fullWidth margin="normal" />
                    <TextField label="Project Name" fullWidth margin="normal" />
                    <TextField label="Description" fullWidth margin="normal" multiline rows={4} />
                    <TextField label="Remark" fullWidth margin="normal" />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Program</InputLabel>
                        <Select
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                        >
                            <MenuItem value="ITP">ITP</MenuItem>
                            <MenuItem value="CTP">CTP</MenuItem>
                            <MenuItem value="CAP">CAP</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Project Category</InputLabel>
                        <Select
                            value={projectCategory}
                            onChange={(e) => setProjectCategory(e.target.value)}
                        >
                            <MenuItem value="Project 1">Project 1</MenuItem>
                            <MenuItem value="Project Dc2">Project Dc2</MenuItem>
                            <MenuItem value="Application">Application</MenuItem>
                            <MenuItem value="Software">Software</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Customer</InputLabel>
                        <Select
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                        >
                            <MenuItem value="Vehicle Manufacturer 1">Vehicle Manufacturer 1</MenuItem>
                            <MenuItem value="Vehicle Manufacturer 2">Vehicle Manufacturer 2</MenuItem>
                            <MenuItem value="Vehicle Manufacturer 3">Vehicle Manufacturer 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel control={<Checkbox />} label="SW" />
                </Box>
            );
        }
        return null;
    };

    return (
        <Box display="flex">
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <List style={{paddingTop: '85px',}}>
                    {menus.map((menu) => (
                        <ListItem button key={menu} onClick={() => handleMenuClick(menu)}>
                            <ListItemText primary={menu} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" flexGrow={1} p={3}>
                {renderRightContent()}
            </Box>
        </Box>
    );
};

export default Project;
