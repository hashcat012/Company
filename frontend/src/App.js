import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

// Dummy user data
const dummyUser = {
  username: "Player1",
  email: "player1@example.com",
  profilePic: "https://i.pravatar.cc/150?img=3",
  netWorth: 1250000,
  totalRevenue: 2300000,
  totalExpenses: 1050000,
  netProfit: 1250000,
  companies: [
    {
      name: "SaaSify",
      revenue: 500000,
      netProfit: 200000,
      cashFlow: 300000,
      marketShare: 12,
      customerSatisfaction: 85,
      employeeEfficiency: 90,
      riskLevel: 20,
      growthRate: 8,
    },
    {
      name: "GameForge",
      revenue: 300000,
      netProfit: 100000,
      cashFlow: 150000,
      marketShare: 8,
      customerSatisfaction: 80,
      employeeEfficiency: 70,
      riskLevel: 35,
      growthRate: 12,
    },
  ],
  league: "Startup",
  prestige: 120,
  dailyMoves: 3,
  memberSince: "2025-06-01",
  lastLogin: "2026-01-18",
};

// Sidebar links
const sidebarLinks = [
  { name: "Dashboard", path: "/" },
  { name: "PvP Arena", path: "/pvp" },
  { name: "Hamleler", path: "/moves" },
  { name: "Şirketler", path: "/companies" },
  { name: "Pazar", path: "/market" },
  { name: "Leaderboard", path: "/leaderboard" },
  { name: "Profil", path: "/profile" },
];

// Dashboard component
function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Finans Kartları */}
      <Grid container spacing={2}>
        {[
          { label: "Net Worth", value: dummyUser.netWorth },
          { label: "Total Revenue", value: dummyUser.totalRevenue },
          { label: "Total Expenses", value: dummyUser.totalExpenses },
          { label: "Net Profit", value: dummyUser.netProfit },
        ].map((item) => (
          <Grid item xs={12} md={3} key={item.label}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{item.label}</Typography>
                <Typography variant="h6">${item.value.toLocaleString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Şirketler */}
      <Box mt={4}>
        <Typography variant="h5">Şirketlerim</Typography>
        <Grid container spacing={2} mt={1}>
          {dummyUser.companies.map((c) => (
            <Grid item xs={12} md={6} key={c.name}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{c.name}</Typography>
                  <Typography>Revenue: ${c.revenue}</Typography>
                  <Typography>Net Profit: ${c.netProfit}</Typography>
                  <Typography>Cash Flow: ${c.cashFlow}</Typography>
                  <Typography>Market Share: {c.marketShare}%</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pazar Trendleri */}
      <Box mt={4}>
        <Typography variant="h5">Pazar Trendleri</Typography>
        <Grid container spacing={2} mt={1}>
          {["SaaS", "E-ticaret", "Oyun Stüdyosu", "Influencer/Ajans", "Finans/Yatırım"].map(
            (sector) => {
              const trend = (Math.random() * 10 - 5).toFixed(1); // -5 ile +5 arasında
              return (
                <Grid item xs={12} md={2} key={sector}>
                  <Card>
                    <CardContent>
                      <Typography>{sector}</Typography>
                      <Typography color={trend >= 0 ? "success.main" : "error.main"}>
                        {trend > 0 ? "+" : ""}
                        {trend}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>
    </Box>
  );
}

// Sidebar
function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      <Box sx={{ width: 240 }}>
        <List>
          {sidebarLinks.map((link) => (
            <ListItem button key={link.name} component={Link} to={link.path}>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

// Main App
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Company Project
            </Typography>
          </Toolbar>
        </AppBar>

        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pvp" element={<Typography>PvP Arena (Hazırlanıyor)</Typography>} />
            <Route path="/moves" element={<Typography>Hamleler (Hazırlanıyor)</Typography>} />
            <Route path="/companies" element={<Typography>Şirketler (Hazırlanıyor)</Typography>} />
            <Route path="/market" element={<Typography>Pazar (Hazırlanıyor)</Typography>} />
            <Route path="/leaderboard" element={<Typography>Leaderboard (Hazırlanıyor)</Typography>} />
            <Route path="/profile" element={<Typography>Profil (Hazırlanıyor)</Typography>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;