
export const Filter = (movies, filters) => {
  const { searchTerm, minRating } = filters;
  
  return movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = movie.rating >= minRating;
    return matchesSearch && matchesRating;
  });
};