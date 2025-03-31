import * as S from "./style";

const Login = () => {
  return (
    <S.LoginLayout>
      <S.LoginLogo src="/BiteLogo.svg" />
      <S.Button>
        <S.Google src="/google.svg" />
        <S.Text>구글 로그인</S.Text>
      </S.Button>
    </S.LoginLayout>
  );
};

export default Login;
