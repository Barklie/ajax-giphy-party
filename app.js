console.log("Let's get this party started!");

async function getGif(query){
    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
          params: {
            api_key: 'HYXYEukKJpDnLJLnLLBlmV1CJoBEDmjO',
            q: `${query}`,
            limit: '25',
            rating: 'r'
          }
        });
        console.log(response.data);
        const url = response.data.data[0].images.original.url
        const title = response.data.data[0].title
        // console.log(url)
        // console.log(title)
        makeGif(url, title)
      } 
      catch (error) {
        console.error(error);
    }
}

function makeGif(url, title){
    $('#gifs-container').append(`<div class="gifs"> <img src="${url}" alt="${title}"> </div>`)
}

$('form').on('submit', function(e){
    e.preventDefault()
    const inputVal = $('input').val()
    getGif(inputVal)

$('input').val("")

})

$('#rmvBtn').on('click', function(e){
    e.preventDefault();

    $('.gifs').remove()
})