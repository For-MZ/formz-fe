export async function requestVerificationCode(email: string): Promise<void> {
  try {
    const response = await fetch('/api/send-verification-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Error requesting verification code');
    }

    console.log('Verification code request successful');
    // 성공했을 때의 처리도 이곳에서 가능합니다.
  } catch (error) {
    console.error('Error requesting verification code:', error);
    // 요청이 실패했을 때 실행할 코드를 작성합니다.
    throw error; // 예외를 호출자에게 던집니다.
  }
}
