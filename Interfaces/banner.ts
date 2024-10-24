export interface IBanner {
  banner: IBannerImage;
  id: string;
  name: string;
  url: string;
}

interface IBannerImage {
  id: string;
  url: string;
}
