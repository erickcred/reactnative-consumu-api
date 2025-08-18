import axios from "axios";

import { CAR_API_BASE_URL } from "../constants/car";
import { ICarModel } from "../components/CardView/props";

interface IApiResponse {
  cars: ICarModel[];
}

export const fetchGetCarData = async (id: number) => {
  try {
    const response = await axios.get<IApiResponse>(CAR_API_BASE_URL);
    const carData = response.data.cars.find(car => car.id == id) || null;

    return carData;
  } catch (error) {
    console.log("Erro ao buscar dados da api: ", error);
  }
}