export type ApiApod = {
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  urlhd: string;
};

export type RoverType = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
};

export type ApiRoverList = { rovers: RoverType[] };

export type ApiRover = {
  rover: RoverType;
};

export type ApiRoverPhotos = { photos: { img_src: string }[] };
