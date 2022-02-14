import React from "react";
import { FormLabel } from "react-bootstrap";
import Form from "../../shared/Form";

const MainContentForm = () => {
  return (
    <>
      <FormLabel>Ready to start trading?</FormLabel>
      <Form />
    </>
  );
};

export default React.memo(MainContentForm);
