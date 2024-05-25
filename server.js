// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// const rotas = {
//   "/" : "Curso de Node.js",
//   "/livros" : "entrei na rota livros",
//   "/autores" : "entrei na rota autores",
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.end(rotas[req.url]);
// });

// server
app.listen(PORT, () => {
  console.log("servidor escutando");
});


/// a diferenca do pm2 do nodemon é q 
///o pm2 serve pra ambiente de produção e 
///o nodemon é p desenvolvimento