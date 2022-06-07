export type ApiApod = {
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  urlhd: string;
};

export type RoverType = any;

export type ApiRoverList = { rovers: RoverType[] };

export type ApiRover = {
  rover: RoverType;
};

export type ApiRoverPhotos = { photos: { img_src: string }[] };
