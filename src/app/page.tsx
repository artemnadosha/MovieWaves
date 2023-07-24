"use client";
import { Box, CheckboxOrRadio, LabelledInputField } from "@/UI";

export default function Home() {
  const fun = (e: any) => {
    e.preventDefault();
    const test = [...e.target];
    const result = test.reduce((acc, cur) => {
      if (cur.name && cur.checked)
        acc.push({ name: cur.name, checked: cur.checked });

      return acc;
    }, []);
    console.log(result);
  };

  return (
    <Box>
      <form onSubmit={fun}>
        <label>
          <LabelledInputField
            name="test"
            label="test1"
            color="secondary"
            variant="outlined"
          />

          <LabelledInputField
            name="test"
            label="test2"
            color="primary"
            size="medium"
          />
          <LabelledInputField
            name="test"
            label="test3"
            color="primary"
            size="large"
          />
        </label>
        <button type={"submit"}></button>
      </form>
    </Box>
  );
}
