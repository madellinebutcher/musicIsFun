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
        scrollTo(0,0)
        var template = ''
        for (let i = 0; i < results.length; i++) {
            var song = results[i];
            
            template += `
            <div class="row media my-2">
                <div class="col media-left text-center" style="margin-left:15vw; padding:0">   
                
                <img src="${song.albumArt}">

                </div>
                <div class="media-body" style="margin-right:15vw; padding-top:2vh">
                <h2 style="font-style: italic">${song.title}</h2>
                <h3>${song.artist}</h3>
                <h5>Album: ${song.collection}</h3>
                <a href="https://www.apple.com/itunes/music/" class="btn btn-outline-success my-2" role="button" aria-pressed ="true" style="margin-right:1vw">$${song.price}</a> 
                <audio controls controlsList="nodownload" src="${song.preview}"></audio>
          
                </div> 
            </div>    
            `
        }
        document.getElementById('songs').innerHTML = template

      console.log(results)
    }
  
  
  
  
    
}