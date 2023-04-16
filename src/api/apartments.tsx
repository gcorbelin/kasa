import apartments from "../datas/apartments.json";

export const getApartments = () => {
  return apartments;
};

export const getApartment = (apartmentId: string) => {
  return apartments.find((item) => item.id === apartmentId);
};
