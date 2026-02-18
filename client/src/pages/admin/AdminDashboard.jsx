import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import AdminLayout from "../../components/layout/AdminLayout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

import {
  sampleUsers,
  sampleChats,
  sampleMessages,
  sampleGroups,
} from "../../constants/sampleData";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminDashboard = () => {

  // ================= STATS =================
  const totalUsers = sampleUsers.length;
  const totalChats = sampleChats.length;
  const totalMessages = sampleMessages.length;
  const totalGroups = sampleGroups.length;

  // ================= BAR CHART (System Overview) =================
  const barData = {
    labels: ["Users", "Groups", "Chats", "Messages"],
    datasets: [
      {
        label: "Platform Data",
        data: [totalUsers, totalGroups, totalChats, totalMessages],
        backgroundColor: "#1976d2",
      },
    ],
  };

  // ================= DOUGHNUT CHART (Chat vs Group Ratio) =================
  const doughnutData = {
    labels: ["Private Chats", "Group Chats"],
    datasets: [
      {
        data: [sampleChats.length, sampleGroups.length],
        backgroundColor: ["#42a5f5", "#66bb6a"],
      },
    ],
  };

  return (
    <AdminLayout>
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Admin Dashboard
        </Typography>

        {/* ===== Overview Cards ===== */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography>Total Users</Typography>
              <Typography variant="h4">{totalUsers}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography>Total Groups</Typography>
              <Typography variant="h4">{totalGroups}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography>Total Chats</Typography>
              <Typography variant="h4">{totalChats}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography>Total Messages</Typography>
              <Typography variant="h4">{totalMessages}</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* ===== Charts Section ===== */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          
          {/* Bar Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Platform Overview
              </Typography>
              <Bar data={barData} />
            </Paper>
          </Grid>

          {/* Doughnut Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chat Distribution
              </Typography>
              <Doughnut data={doughnutData} />
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default AdminDashboard;
