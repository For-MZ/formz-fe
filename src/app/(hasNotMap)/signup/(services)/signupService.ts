export async function submitForm(formData: FormData): Promise<void> {
  try {
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error submitting form');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('회원가입 요청 중 오류 발생');
  }
}
