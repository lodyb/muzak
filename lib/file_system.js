
var fs = require('fs');


function song_play (song) {
	fs.readFile(song, function (err, song) {
		if (err) throw err;
		console.log(song);
	});
}

function dir_read (music_dir) {
	fs.readdir(music_dir, function (err, dir) {
			if(err) throw err;
			console.log(dir);
	});
}
