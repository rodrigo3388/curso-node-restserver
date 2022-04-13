const { request } = require('express');
const { response } = require('express')

const  usuariosGet = (req = request, res = response) => {
    const {q,nombre = 'No Name',apikey,page,limit} = req.query;
    res.json({
        mgs: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
  }

  const  usuariosPut = (req, res = response) => {
   const {id} = req.params;
    res.json({
        mgs: 'put API - usuariosPut',
        id
    })
  }
  const  usuariosPost= (req, res = response) => {
   const {nombre,edad} = req.body;
    res.json({
        mgs: 'post API - usuariosPost',
        nombre,
        edad
    })
  }
  const  usuariosDelete = (req, res = response) => {
   
    res.json({
        mgs: 'delete API - usuariosDelete'
    })
  }
  const  usuariosPath= (req, res = response) => {
   
    res.json({
        mgs: 'path API - usuariosPath'
    })
  }

  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPath
  }