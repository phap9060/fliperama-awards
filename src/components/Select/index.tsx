import "dracula-ui/styles/dracula-ui.css";
import { Text, Select, Box } from "dracula-ui";
type SelectTypes = {
  category?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
};
export const SelectComponent = (props: SelectTypes) => {
  return (
    <Box width="auto">
      <Text size="md">{props.category}</Text>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <div style={{ marginBottom: 40 }}>
          <Select
            size="medium"
            defaultValue="default"
            variant="normal"
            color="purple"
          >
            <option value="default">Selecione a opção</option>
            <option value={props.option1}>{props.option1}</option>
            <option value={props.option2}>{props.option2}</option>
            <option value={props.option3}>{props.option3}</option>
            <option value={props.option4}>{props.option4}</option>
            <option value={props.option5}>{props.option5}</option>
          </Select>
        </div>
      </div>
    </Box>
  );
};
