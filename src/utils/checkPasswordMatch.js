// check password match
const checkPasswordMatch = (data) => {
  if (data.password !== data.password2) {
    return false;
  }
  return true;
};
export default checkPasswordMatch;
