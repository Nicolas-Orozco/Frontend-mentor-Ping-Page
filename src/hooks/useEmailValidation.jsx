function useEmailValidation(email) {
  let isEmpty;
  if (email) return (isEmpty = false);
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(email);
  return { isEmpty, isValid };
}

export default useEmailValidation;
