import * as Yup from "yup";

const Validators = () => {
  const requiredMessage = "This fiels is required";

  const validationSchema = Yup.object({
    companyName: Yup.string().required(requiredMessage),
    about: Yup.string().required(requiredMessage),
    firstName: Yup.string().required(requiredMessage),
    lastName: Yup.string().required(requiredMessage),
    emailAddress: Yup.string().email().required(requiredMessage),
    country: Yup.string().required(requiredMessage),
    streetAddress: Yup.string().required(requiredMessage),
    city: Yup.string().required(requiredMessage),
    state: Yup.string().required(requiredMessage),
    zip: Yup.string().required(requiredMessage),
  });
  return { validationSchema };
};

export default Validators;
