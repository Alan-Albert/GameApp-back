/*
    Event Routes
    /api/games
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getGames, crearGame, actualizarGame, eliminarGame } = require('../controllers/games');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos 
router.get('/', getGames );

// Crear un nuevo evento
// router.post(
//     '/',
//     [
//         check('title','El titulo es obligatorio').not().isEmpty(),
//         check('start','Fecha de inicio es obligatoria').custom( isDate ),
//         check('end','Fecha de finalización es obligatoria').custom( isDate ),
//         validarCampos
//     ],
//     crearGame 
// );

// // Actualizar Game
// router.put(
//     '/:id', 
//     [
//         check('title','El titulo es obligatorio').not().isEmpty(),
//         check('start','Fecha de inicio es obligatoria').custom( isDate ),
//         check('end','Fecha de finalización es obligatoria').custom( isDate ),
//         validarCampos
//     ],
//     actualizarGame 
// );

// Borrar evento
// router.delete('/:id', eliminarGame );

module.exports = router;