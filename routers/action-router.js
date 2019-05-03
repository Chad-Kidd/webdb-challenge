const express = require("express");

const Actions = require("../data/models")

const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const actions = await Actions.getActions();
    res.status(200).json(actions);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the actions' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const actions = await Actions.getActionsById(req.params.id);
    if (actions) {
      res.status(200).json(actions);
    } else {
      res.status(404).json({ message: 'We could not find the action' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the action' });
  }
});

//POST 
router.post("/", (req, res) => {
  Actions
    .addAction(req.body, "id")
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ message: "error updating action" });
    });
});


//PUT UPDATE
// router.put('/:id', async (req, res) => {
//   const changes = req.body;

//   if (changes.name) {
//     try {
//       const updated = await Actions.update(req.params.id, changes);
//       if (updated) {
//         res.status(200).json(updated);
//       } else {
//         res.status(404).json({
//           message: 'That track does not exist',
//         });
//       }
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: 'We ran into an error updating the track' });
//     }
//   } else {
//     res.status(400).json({
//       message: 'Please provide the name of the track',
//     });
//   }
// });


//DELETE
// router.delete('/:id', async (req, res) => {
//   try {
//     const count = await Actions.remove(req.params.id);
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({
//         message: 'That action does not exist, perhaps it was deleted already',
//       });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'We ran into an error removing the action' });
//   }
// });


module.exports = router;