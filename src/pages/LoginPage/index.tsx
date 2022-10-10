import { Header } from "../../components/Header";
import { Card, Text } from "dracula-ui";
import { useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import "dracula-ui/styles/dracula-ui.css";
import "./style.css";
import { signInWithGoogle } from "../../fireBase/authGoogle";

export const LoginPage = () => {
  const navigate = useNavigate();
  const Login = async () => {
    const result = await signInWithGoogle();
    if (result) {
      console.log(result.user.refreshToken);
      localStorage.setItem("token", result.user.refreshToken);
      navigate(`vote`);
    }
  };
  return (
    <section className="login-container">
      <Header />

      <Card variant="subtle" color="purple" p="md" m="md">
        <div className="card-content">
          <Text className={"login-text"} color="purple">
            Para votar,por favor, faça login com sua conta do google!
          </Text>
          <Text className={"login-text"} color="yellow">
            Sempre reforçando que a votação é anônima!
          </Text>
          <img className="login-image" onClick={Login} src={google} />
        </div>
      </Card>
    </section>
  );
};