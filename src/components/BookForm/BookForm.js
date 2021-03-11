import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./BookFormStyle.css";
import { BookContext } from "../../contexts/BookContext";
const initialValues = {
  bookTitle: "",
  authorName: "",
};
const validationSchema = Yup.object({
  bookTitle: Yup.string().required("Required"),
  authorName: Yup.string().required("Required"),
});
const BookForm = () => {
  const { addBooksToList } = useContext(BookContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addBooksToList(values.bookTitle, values.authorName);
        resetForm();
      }}
    >
      <Form>
        <div>
          <Field name="bookTitle" type="text" placeholder="Book Name" />
          <br />
          <ErrorMessage name="bookTitle" />
        </div>
        <div>
          <Field name="authorName" type="text" placeholder="Author Name" />
          <br />
          <ErrorMessage name="authorName" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
