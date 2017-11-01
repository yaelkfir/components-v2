/*
getGenre() {
this.service.getGenres();

.subscribe(
  (data) => {
    this.genres = data;
    console.log(this.genres);

    this.shuffle();
  },
  (err) => {
    console.log(err)
  }
);
}

getActors() {
  this.service.getActors();
  /*
  .subscribe(
    (data) => {
      this.actors = data['results'];
      // console.log(this.actors);
      // this.shuffle();
    },
    (err) => {
      console.log(err)
    }
  );
}
     */
