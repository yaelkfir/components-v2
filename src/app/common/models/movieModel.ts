export class MovieModel {
  title: string;
  overview: string;
  adult: boolean;
  backdrop_path: null;
  genre_ids: Array<any>;
  id: number;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast?: Array<object>;
  crew?: Array<object>;
  movieTable?: object;

  constructor(id: number) {
    this.id = id
  }

  empty() {
    const cast = {
      cast_id: 0,
      character: '',
      credit_id: '',
      gender: -1,
      id: 0,
      name: '',
      order: 0,
      profile_path: null
    };

    const crew = {
      credit_id: '',
      department: '',
      gender: 0,
      id: 0,
      job: '',
      name: '',
      profile_path: ''
    };

    const movie = {
      title: '',
      overview: '',
      poster_path: '',
      genre_ids: [],
      release_date: 0,
      popularity: 0,
      // cast: [cast],
      // crew: [crew],
      original_language: '',
      adult: false,
      video: false,
      vote_average: 0,
      vote_count: 0,
      id: 0,
      backdrop_path: null,
      original_title: ''
    };

    return movie;
  }

  newMovie(obj: Object) {
    const isObject = obj.hasOwnProperty('id');
    Object.assign(this, this.empty());
    isObject === true ? Object.assign(this, obj) : Object.assign(this, this.empty());
    return this;
  }
}
