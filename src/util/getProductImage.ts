import { Product } from "../api/generated";

export const getProductImage = (product: Product) => {
  const photo: photoImage | undefined = product?.photo?.[0] as
    | photoImage
    | undefined;
  if (!photo) return undefined;

  type photoImage = {
    formats?: {
      medium?: { url: string };
      thumbnail?: { url: string };
      small?: { url: string };
    };
    url: string;
  };

  return (
    photo.formats?.medium?.url ||
    photo.formats?.small?.url ||
    photo.formats?.thumbnail?.url ||
    photo.url
  );
};
