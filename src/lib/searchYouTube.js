// import YOUTUBE_API_KEY from '../config/youtube.js';


var searchYouTube = (options, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`, function(data) {
    return callback(data.items);
  });
};




export default searchYouTube;

//$.ajax({
//url: `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${options.max || 5}&q=${options.query}&videoEmbeddable=true&key=${options.key}`,
//method: 'GET',
//success: (data) => callback(data.items)
//});

//$.ajax({
//url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max || 5}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`,
//method: 'GET',
//success: function(data) {
//return callback(data.items);
//}
//})

// })
// $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`, function(data) {
//return callback(data.items);
//})

// };
// data: {
//q: options.query,
//max: options.max,
//key: YOUTUBE_API_KEY
// }