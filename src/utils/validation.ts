export const isEmpty = (value: string) => {
  return value.trim() === '';
};

export const hasMinMaxLength = (value: string, minLength: number, maxLength: number) => {
  return value.length <= minLength || value.length >= maxLength;
};
