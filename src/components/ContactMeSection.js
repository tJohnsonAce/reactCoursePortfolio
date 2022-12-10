import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'other',
      comment: '',
    },
    onSubmit: (values) => {
      if (Object.keys(formik.errors).length > 0) {
        onOpen({ message: formik.errors[Object.keys(formik.errors)[0]]
        })
      } else {
        sendFormData(values)
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .max(30, 'First name must be 30 characters or less'),
      email: Yup.string()
        .required('Email is required')
        .email('Pease enter a valid email address'),
        type: Yup.string()
          .required('Type is required')
          .oneOf(['hireMe', 'openSource', 'other'], 'Please select a valid type'),
        comment: Yup.string()
          .required('Comment is required')
          .max(500, 'Comment must be 500 characters or less')
    }),
  });

  const sendFormData = (data) => {
    // Perform the API call with the provided data
  }

  useEffect(() => {
    if (response) {
      // Show an alert message with the response
      onOpen({ message: response })
    }
  }, [response, onOpen])
  

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactMe-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>
                {formik.touched.comment && formik.errors.comment ? formik.errors.comment : ''}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;