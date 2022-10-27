import axios from "axios";

export default class SeriesAPI {
  async getPopular() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&page=1"
    );
    return data.results;
  }
}