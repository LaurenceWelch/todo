const keyName = "list";

export const loadState = () => {
  try {
    const list = localStorage.getItem(keyName);
    const arr = JSON.parse(list);
    return arr;
  } catch (e) {
    console.log(e);
  }
};

export const saveState = (list) => {
  try {
    const str = JSON.stringify(list);
    localStorage.setItem(keyName, str);
  } catch (e) {
    console.log(e);
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(keyName);
  } catch (e) {
    console.log(e);
  }
};
