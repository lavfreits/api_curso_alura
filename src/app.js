import express from "express";
import conectdatabase from "./config/dbConnect.js";
// import livro from "./models/livro.js";
import routes from "./routes/index.js";

const connection = await conectdatabase();

connection.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

connection.once("open", () => {
  console.log("conexao com banco feita com sucesso");
});

const app = express();
routes(app);

// app.use(express.json());
//middlewares >> 
//têm acesso a req e res e fazem ações nelas
// todas req q tenham como body um json ele vai converter

// const livros = [
//   {id: 1,
//   titulo: "senhor aneis"}, 
//   {id: 2,
//   titulo: "hobbit"},
// ];

// function buscarLivro(id){
//   return livros.findIndex(livro => {
//     return livro.id === Number(id);
//   });
// }

//CRUD

// app.get("/", (req, res) => {
//   res.status(200).send("curso de node");
// });

// app.get("/livros/:id", (req, res) => {
//   const index = buscarLivro(req.params.id);
//   res.status(200).json(livros[index]);
// });

// app.put("/livros/:id", (req, res) => {
//   const index = buscarLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.status(200).json(livros);
// });

// app.post("/livros", (req, res) => {
//   livros.push(req.body);
//   res.status(201).send("sucesso, livro cadastrado"); 
//   //201 status de registro criado
// });

// app.delete("/livros/:id", (req, res) => {
//   const index = buscarLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("livro removido com sucesso");
//   //status p deletado: 200 e 204
// });

export default app;


