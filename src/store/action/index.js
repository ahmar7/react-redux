const set_Data = (data) => {
  return (dispatch) => {
    dispatch({ type: "data", data: data });
  };
};

export default set_Data;
