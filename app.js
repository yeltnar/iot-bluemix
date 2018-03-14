const express = require('express');
const app = express();
app.set("port", 3000);

//app.use("/",express.static(app.get("staticFolder")));

// app.use("/getPort",(req,res)=>{
// 	res.end(req.app.get("port"));
// })

app.get("/",(req, res)=>{
	res.end("welcome");
});

app.get("/send",(req, res)=>{
	res.end("/send");
});

app.listen(app.get('port'),()=>{
	console.log("listening on port "+app.get('port'));
});