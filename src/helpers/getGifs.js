export const getGifs = async (categorias) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NuV1zOIph8pDQhWokWc1WZ9Uh7SanFg1&q=${categorias}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  console.log(gifs);
  return gifs;
};
