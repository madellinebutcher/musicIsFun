function ItunesController(){
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e){
      e.preventDefault();
      var artist = e.target.artist.value;
      itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
    }
  
    //Start coding here
    function drawSongs(results){
    
        var template = ''
        for (let i = 0; i < results.length; i++) {
            var song = results[i];
            
            template += `
           
                <h2>Title: ${song.title}</h2>
                <img src="${song.albumArt}">
                <h2>Artist: ${song.artist}</h2>
                <h3>Album: ${song.collection}</h3>
                <h5>Price: $${song.price}</h3>
                <audio controls controlsList="nodownload" src="${song.preview}"></audio>
          
            
            `
        }
        document.getElementById('songs').innerHTML = template

      console.log(results)
    }
  
  
  
  
    
}