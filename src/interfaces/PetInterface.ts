export interface IPetData {
  id: string;
  name: string;
  image: string[];
  species: string;
  breed: string;
  age: number;
  size: string;
  specialNeeds: string[];
  gender: string;
  location: string;
  description: string;
  temperament: string;
  adoptedStatus: string;
  medicalHistory: string;
  adoptionRequirements: string;
  createdAt: string;
  updatedAt: string;
  adoptionRequest: string[];
}

export interface IPetDataInput {
  name: string;
  image: string[];
  species: string;
  breed: string;
  age: number;
  size: string;
  specialNeed: string[];
  gender: string;
  location: string;
  description: string;
  temperament: string;

  medicalHistory: string;
  adoptionRequirements: string;
}
export interface IPetDataInsert {
  name: string;
  image: string[];
  species: string;
  breed: string;
  age: number;
  size: string;
  specialNeeds: string[];
  gender: string;
  location: string;
  description: string;
  temperament: string;

  medicalHistory: string;
  adoptionRequirements: string;
}
export interface IApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IPetData;
}
