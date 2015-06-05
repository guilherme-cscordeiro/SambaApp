/**
* Video.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    "name": {
      type: 'string',
      required: true
    },
    "original_video_path": {
      type: 'string',
      required: true,
      unique: true
    },
    "encoded_video_path": {
      type: 'string',
      unique: true
    }

  },

  beforeCreate: function(video, cb){
    str_array = video.original_video_path.split('/')
    video.encoded_video_path = "/home/teste/vid1/encoded/" + video.name; 
  }
};