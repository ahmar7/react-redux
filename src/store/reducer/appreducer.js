var initial_state = {
  appname: "chat app",
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

