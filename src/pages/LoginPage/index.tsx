import { Header } from "../../components/Header";
import { Button, Card, Text } from "dracula-ui";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../fireBase/authGoogle";
import { useEffect } from "react";
import "dracula-ui/styles/dracula-ui.css";
import "./style.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const Login = async () => {
    const result = await signInWithGoogle();
    if (result) {
      localStorage.setItem("token", result.user.refreshToken);
      navigate(`vote`);
    }
  };
  useEffect(() => {}, []);
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
          <Button
            as="button"
            style={{ marginTop: 15 }}
            variant="outline"
            color="yellow"
            onClick={Login}
          >
            <Text size="lg" color="purple">
              Logar com conta google!
            </Text>
          </Button>
        </div>
      </Card>
    </section>
  );
};
