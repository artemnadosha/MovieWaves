"use client";
import { Box, Checkbox } from "@/UI";

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
        <Checkbox color="secondary" name="test1" />
        <Checkbox
          color="primary"
          variant="outlined"
          size="medium"
          name="test2"
        />
        <Checkbox
          color="primary"
          variant="outlined"
          size="large"
          name="test3"
        />
        <button type={"submit"}></button>
      </form>
    </Box>
  );
}
