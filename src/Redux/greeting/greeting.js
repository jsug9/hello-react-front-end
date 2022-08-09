const initialState = {
  greeting: '',
};

const GET_GREETING = '/greeting/GET_GREETING';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return { ...state, greeting: action.payload };

    default:
      return state;
  }
};

export { GET_GREETING };
export default greetingReducer;
