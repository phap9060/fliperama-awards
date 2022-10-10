import { useState, useEffect } from "react";
import { db } from "../../fireBase/config";
import { collection, getDocs } from "firebase/firestore";
import { SelectComponent } from "../../components/Select";
import "dracula-ui/styles/dracula-ui.css";
import "./style.css";
import { Box } from "dracula-ui";
import { Container } from "../../components/Container/index";
import { allCategories } from "./categories";
import { Header } from "../../components/Header";

type usersTypes = {
  id?: string;
  name?: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  option_5?: string;
  option_6?: string;
  option_7?: string;
  option_8?: string;
  option_9?: string;
  option_10?: string;
  option_11?: string;
  option_12?: string;
  option_13?: string;
};
function MainPage() {
  const [users, setUsers] = useState<usersTypes[]>();
  const dbCollection = collection(db, "user");
  const getUsers = async () => {
    const usersData = await getDocs(dbCollection);
    setUsers(usersData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="main-section">
      <Container>
        <Header />
        <Box width="full" color="blackLight">
          {allCategories.map((categories) => (
            <SelectComponent
              category={categories.categoryName}
              option1={categories.option1}
              option2={categories.option2}
              option3={categories.option3}
              option4={categories.option4}
              option5={categories.option5}
            />
          ))}
        </Box>
      </Container>
    </section>
  );
}

export default MainPage;
