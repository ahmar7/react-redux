var initial_state = {
  name: "Ahmar",
  email: "Ahmar@gmail.com",
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "setdata":
      return {
        ...state,
        users: [...state.users, action.data],
      };
  }
  return state;
};

