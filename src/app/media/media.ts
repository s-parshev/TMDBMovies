export class Media {
  name: string;
  description: string;
  genre: number[];
  imgUrl: string;
  mediaId: number;
  released: string;
  vote: number;
  homepage: string;

  constructor(
    name: string,
    description: string,
    genre: number[],
    imgUrl: string,
    mediaId: number,
    released: string,
    vote: number,
    homepage: string
  ) {
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.imgUrl = imgUrl;
    this.mediaId = mediaId;
    this.released = released;
    this.vote = vote;
    this.homepage = homepage;
  }
}
