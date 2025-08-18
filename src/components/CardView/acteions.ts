import React from "react";
import { fetchGetCarData } from "../../apis/getCars";
import { ICarModel } from "./props"

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>
) => {
  const response = await fetchGetCarData(id);

  try {
    if (response)
      setCarData(response);
  } catch (error) {
    console.log("Erro ao buscar dados na api: ", error)
    setCarData(null);
  }
}

export const rendlePreviusItem = async (
  carData: ICarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData?.id > 1)
      response = await fetchGetCarData(carData?.id - 1);

    if (response)
      setCarData(response);

  } catch (error) {
    console.log("Erro ao localizar dados! ", error);
    setCarData(null)
  }
}

export const rendleNextItem = async (
  carData: ICarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<ICarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData.id < 10)
      response = await fetchGetCarData(carData.id + 1);

    if (response)
      setCarData(response);
  } catch (error) {
    console.log("Erro ao localizar dados! ", error);
    setCarData(null);
  }
}