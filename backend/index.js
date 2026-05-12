const express = require('express');
const connectDb = require('./Models/db.js');
const Routes = require('./Routes/utilityRoutes.js');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: true,
   methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


connectDb().then(()=>{
   console.log("connected");
   app.listen(8080, ()=>{
    console.log("listening");
   });
}).catch(()=>{
  process.exit(1);
})

app.use("/",Routes);

