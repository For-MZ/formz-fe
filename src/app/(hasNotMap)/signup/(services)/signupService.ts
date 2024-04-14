import axios, { AxiosResponse } from 'axios';

type ApiResponse = {
  success: boolean;
  message: string;
};

export async function submitForm(formData: FormData): Promise<ApiResponse | undefined> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post('/api/sign-up', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('회원가입 요청 중 오류 발생');
  }
}
