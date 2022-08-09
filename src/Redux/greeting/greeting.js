const initialState = {
  greeting: '',
};

const GET_GREETING = '/greeting/GET_GREETING';

const getGreeting = async (dispatch) => {
  const greeting = 'Hello Worlsd';
  return dispatch({
    type: GET_GREETING,
    payload: greeting,
  });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return { ...state, greeting: action.payload };

    default:
      return state;
  }
};

export { getGreeting };
export default greetingReducer;
