const express = require('express');
const musicRouter = express.Router();
const Music = require('../models/music');

musicRouter
    .route('/artists/{artist_id}')
    .get((req, res, next) => {
        Music.find((err, musics) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(200).send(musics);
        });
      })
    
      .post((req, res, next) => {
        const newMusic = new Music(req.body);
        newMusic.save((err, music) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(201).send(music);
        });
      });

 musicRouter
    .route("/artists/{artist_id}/releases/{?sort,sort_order}")
    .get((req, res, next) => {
      Music.find((err, musics) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(200).send(musics);
      });
    })

musicRouter
      .route('/labels/{label_id}')
      .get((req, res, next) => {
        Music.find((err, musics) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(200).send(musics);
        });
      })

musicRouter
      .route('/labels/{label_id}/releases{?page,per_page}')
      .get((req, res, next) => {
        Music.find((err, musics) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(200).send(musics);
        });
      })

musicRouter
    .route("/category/:category")
    .get((req, res, next) => {
    Music.find({ category: req.params.category }, (err, musics) => {
    console.log(musics)
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(musics);
  });
});


musicRouter
.route("/:_id")
.get((req, res, next) => {
  Music.findById(req.params._id, (err, music) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(music);
  });
});  
      
module.exports = musicRouter;