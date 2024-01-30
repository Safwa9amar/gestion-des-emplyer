const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
  return re.test(phone);
};
const validateName = (name) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(name);
};
const validateJobTitle = (jobTitle) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(jobTitle);
};
const validateJobLevel = (jobLevel) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(jobLevel);
};
const validateDepartment = (department) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(department);
};
const validateRole = (role) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(role);
};

const validateFirstName = (firstName) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(firstName);
};
const validateLastName = (lastName) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(lastName);
};
const validateCin = (cin) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(cin);
};
const validateAddress = (address) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(address);
};
const validateCity = (city) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(city);
};
const validateCountry = (country) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(country);
};
const validatePostalCode = (postalCode) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(postalCode);
};
const validateBirthDate = (birthDate) => {
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return re.test(birthDate);
};
const validateHiringDate = (hiringDate) => {
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return re.test(hiringDate);
};

const validateSalary = (salary) => {
  const re = /^[0-9]*$/;
  return re.test(salary);
};

const validateStatus = (status) => {
  const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return re.test(status);
};

export {
  validatePassword,
  validateEmail,
  validatePhone,
  validateName,
  validateJobTitle,
  validateJobLevel,
  validateDepartment,
  validateRole,
  validateFirstName,
  validateLastName,
  validateCin,
  validateAddress,
  validateCity,
  validateCountry,
  validatePostalCode,
  validateBirthDate,
  validateHiringDate,
  validateSalary,
  validateStatus,
};
