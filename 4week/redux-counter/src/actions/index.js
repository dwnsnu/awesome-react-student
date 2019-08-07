export const CREATE = "CREATE";
export const REMOVE = "REMOVE";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";

export const create = color => ({
  type: CREATE,
  color
});

export const remove = () => ({
  type: REMOVE
});

export const increment = index => ({
  type: INCREMENT,
  index
});

export const decrement = index => ({
  type: DECREMENT,
  index
});

// 다른 액션 생성자들과 달리, 파라미터를 갖고있습니다
export const setColor = ({ index, color }) => ({
  type: SET_COLOR,
  index,
  color
});
