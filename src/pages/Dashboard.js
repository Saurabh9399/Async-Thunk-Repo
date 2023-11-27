import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AnalyticsDashboard = () => {
  // Mock Data
  const userGrowthData = [
    { month: 'Jan', users: 100 },
    { month: 'Feb', users: 150 },
    { month: 'Mar', users: 200 },
    { month: 'Apr', users: 250 },
    { month: 'May', users: 300 },
    { month: 'Jun', users: 350 },
  ];

  const topProductsData = [
    { name: 'Product A', value: 25 },
    { name: 'Product B', value: 30 },
    { name: 'Product C', value: 45 },
  ];

  return (
    <Grid container spacing={3} style={{ width: '80%', margin: 'auto' }}>
      {/* Total Users */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '150px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">500</Typography>
        </Paper>
      </Grid>

      {/* Total Orders */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '150px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Typography variant="h6">Total Orders</Typography>
          <Typography variant="h4">1000</Typography>
        </Paper>
      </Grid>

      {/* Revenue */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '150px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$50,000</Typography>
        </Paper>
      </Grid>

      {/* Charts */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', height: '300px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Typography variant="h6">User Growth Over Time</Typography>
          <ResponsiveContainer>
            <BarChart data={userGrowthData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#1f78b4" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', height: '300px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Typography variant="h6">Top Products</Typography>
          <ResponsiveContainer>
            <BarChart data={topProductsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#33a02c" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnalyticsDashboard;
