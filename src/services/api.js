
export const getPopularMovies = async (page = 2) => {
    const response = await fetch(`https://k4irooy6hj.execute-api.us-east-1.amazonaws.com/teststage/test?page=${page}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(`https://k4irooy6hj.execute-api.us-east-1.amazonaws.com/teststage/test?query=${query}&page=${page}`);
    const data = await response.json();
    return data.results;
}
