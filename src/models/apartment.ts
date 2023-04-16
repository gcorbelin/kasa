import HostModel from "./host";

export default class ApartmentModel {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HostModel;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];

  constructor(
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: HostModel,
    rating: string,
    location: string,
    equipments: string[],
    tags: string[]
  ) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.pictures = pictures;
    this.description = description;
    this.host = host;
    this.rating = rating;
    this.location = location;
    this.equipments = equipments;
    this.tags = tags;
  }
}
