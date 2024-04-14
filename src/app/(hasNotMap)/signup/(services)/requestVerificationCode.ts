import axios from 'axios';

export async function requestVerificationCode(email: string): Promise<void> {
  try {
    const response = await axios.post('/api/send-verification-code', { email });
    console.log('Verification code request successful:', response.data);
    // 성공했을 때의 처리도 이곳에서 가능합니다.
  } catch (error) {
    console.error('Error requesting verification code:', error);
    // 요청이 실패했을 때 실행할 코드를 작성합니다.
    throw error; // 예외를 호출자에게 던집니다.
  }
}
