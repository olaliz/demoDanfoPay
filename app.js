const app = require("express" )() ;

const PORT = process.env.PORT | 3000;

app.get("", (reg, res) => {
	res. send( "Welcome to DasnfoPay Portal");
});

app. listen(PORT, () => {
	console. log( 'App up at port ${PORT}');
});