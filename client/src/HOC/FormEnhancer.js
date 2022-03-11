import { withFormik } from "formik";
import * as Yup from "yup";

const requiredMessage = "This field is required";
const validationSchema = Yup.object({
  companyName: Yup.string().required(requiredMessage),
  about: Yup.string().required(requiredMessage),
  firstName: Yup.string().required(requiredMessage),
  lastName: Yup.string().required(requiredMessage),
  emailAddress: Yup.string().email().required(requiredMessage),
  password: Yup.string().required(requiredMessage).min(8).max(12),
  country: Yup.string().required(requiredMessage),
  streetAddress: Yup.string().required(requiredMessage),
  city: Yup.string().required(requiredMessage),
  state: Yup.string().required(requiredMessage),
  zip: Yup.string().required(requiredMessage),
});

export const FormEnhancer = withFormik({
  mapPropsToValues: (data) => {},

  // Custom sync validation
  validationSchema: validationSchema,

  handleSubmit: (values, formikBag),
});
