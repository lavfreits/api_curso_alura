import {autor} from "../models/autor.js";

class AutorController {

  static async listarAutores(req, res) {
    try {
      const listaAutors = await autor.find({});
      res.status(200).json(listaAutors);
    }
    catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisicao` });
    }
  }

  static async listarAutorPorId (req, res) {
    try {
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);
      res.status(200).json(AutorEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do Autor` });
    }
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "sucesso, Autor cadastrado", Autor: novoAutor });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar Autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualizado"});
    }
    catch (e) {
      res.status(500).json({ message: `${e.message} - falha na atualizacao do Autor` });
    }
  }
  
  static async apagarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor apagado"});
    }
    catch (e) {
      res.status(500).json({ message: `${e.message} - falha na exclusao do Autor` });
    }
  }
};

export default AutorController;