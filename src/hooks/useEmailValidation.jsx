function useEmailValidation(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.length === 0) return "empty";
  if (re.test(email) === false) return "noformat";
  return "valid";
}

export default useEmailValidation;
