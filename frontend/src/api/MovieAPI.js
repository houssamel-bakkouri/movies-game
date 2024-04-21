import axios from 'axios'

export class MovieAPI {
    
    constructor(api = "https://api.themoviedb.org/3", 
    key = process.env.REACT_APP_API_KEY) {
        this.api = api;
        this.key = key;
    }

    /**
     * This method return an array of actors for a given page 
     * @param {Number} page number of page to return, must not be bigger than 500
     * @returns {Array} An array of actors with some of their movies
     */
    async getPopularActors(page = 1) {
        const response = await axios.get(this.api + '/person/popular?api_key=' 
        + this.key + '&language=en-US&page=' + page);

        var data = [];
        response.data.results.forEach(element => {
            let actor = {
                id : element.id,
                name : element.name,
                image : element.profile_path,
            }
            let movies = [];
            element.known_for.forEach(movie =>{
                movies.push({
                    media_type : movie.media_type,
                    poster : movie.poster_path,
                    title :movie.title,
                    release_date : movie.release_date
                })
            })
            actor.movies = movies;
            data.push(actor);
        });
        return data;
    }
    /**
     * This method return an array of popular movies 
     * @param {Number} page number of page to return, must not be bigger than 500
     * @returns array of movies
     */
    async getPopularMovies(page, genreId = null, year1,year2) {
        var response = null;
        
        if(genreId !== null){
            response = await axios(this.api + '/discover/movie?api_key='
                +this.key + '&with_genres=' + genreId + '&primary_release_date.gte=' + year1+"&primary_release_date.lte="+year2 + '&page='+ page )
        }
        else{
            response = await axios.get(this.api + '/movie/popular?api_key=' 
        + this.key + '&language=en-US'+'&page=' + page )
        }
        //+ '&primary_release_date.gte=' + year1+"&primary_release_date.lte="+year2+
        const data = response.data.results.map(item => {
            //console.log("Item:",item);
            return {
                id : item.id,
                title : item.title,
                poster : item.poster_path,
                release_date : item.release_date
            }
        })
        console.log("data",data.length)
        return data
    }

    /**
     * return an array of credits for a given movie
     * @param {Number} movieId 
     * @returns {Array} array of credits for the given movie
     */
    async getCastsOfMovie(movieId) {
        const responde = await axios.get(this.api + '/movie/' 
        + movieId + '/credits?api_key=' + this.key)

        return responde.data.cast.map(item =>{
            return {
                id : item.id,
                cast_id : item.cast_id,
                credit_id : item.credit_id,
                name : item.name,
                profile_path : item.profile_path
            }
        })
    }


    /**
     * Used to get all movies genres 
     * @returns {Array} array of all the genres and their id's
     */
    async getGenres() {
        const response = await axios.get(this.api + '/genre/movie/list?api_key=' 
        + this.key + '&language=en-US')
        return response.data.genres;
    }

    /**
     * Used to get an array of movies for a given genre
     * @param {Number} genreId The is of the genres of movies
     * @param {Number} page witch page to return
     * @returns array of movie for the given genre
     */
    async getMoviesByGenre(genreId, page = 1) {
        const response = await axios(this.api + '/discover/movie?api_key='
        +this.key + '&with_genres=' + genreId + '&page=' + page)
       
        return response.data.results.map(item => {
            return {
                id : item.id,
                title : item.title,
                poster : item.poster_path,
                release_date : item.release_date
            }
        })
    }
    /**
     * Used to get an array of movies for a year interval
     * @param {String} year1 This is the inferior born  (the min year)
     * @param {String} year2 This is the superior born  
     * @returns array of movie for the given year interval
     */
    async getMoviesByYear(year1='1990-01-01', year2 ='2022-11-22' ) {
        const response = await axios(this.api + '/discover/movie?api_key='
        +this.key + '&primary_release_date.gte=' + year1+"&primary_release_date.lte="+year2 + '&page=' + 1)
        let data= response.data.results.map(item => {
            return {
                id : item.id,
                title : item.title,
                poster : item.poster_path,
                release_date : item.release_date
            }
         })
         console.log("movYearFilter : " ,data.length,year1,year2)
         return data;
}
}