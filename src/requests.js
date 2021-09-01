const API_KEY = "a578cb29315d7331f0c948deb72f2ec8";

const request = {
	fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetcHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default request;