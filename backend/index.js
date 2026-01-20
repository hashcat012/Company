import express from "express"; 
import cors from "cors"; 
import companyRoutes from "./routes/company.js"; 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use("/api/company", companyRoutes); 
app.listen(PORT, () = running on port ${PORT}`)); 
