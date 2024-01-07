import { gql } from "@apollo/client";
export const GET_SUDENT_LIST = gql`
  query GetStudentList {
    students {
      age
      firstName
      id
      lastName
    }
  }
`;

// Define mutation
export const CREATE_NEW_STUDENT = gql`
  mutation CreateStudent($newStudent: CreateStudentInput) {
    createStudent(newStudent: $newStudent) {
      age
      firstName
      lastName
      id
    }
  }
`;
