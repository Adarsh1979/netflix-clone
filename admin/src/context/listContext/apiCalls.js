import { getListsStart, getListsSuccess, getListsFailure, deleteListStart, deleteListSuccess, deleteListFailure, createListStart, createListSuccess, createListFailure } from "./ListActions";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// GET LIST

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get(`${API_URL}/lists/`, {
      headers: {
        Token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// CRAETE MOVIE

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(`${API_URL}/lists/`, list, {
      headers: {
        Token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

// // UPDATE MOVIE

// export const updateMovie = async (movie, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.put(`${API_URL}/movies/${movie._id}`, movie, {
//       headers: {
//         Token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(updateMovieFailure());
//   }
// };


// DELETE MOVIE

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(`${API_URL}/lists/${id}`, {
      headers: {
        Token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};