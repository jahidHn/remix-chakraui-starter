import { Input, Textarea, Button, Text, Select } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Stack, StackDivider, StackProps } from "@chakra-ui/layout";
import * as React from "react";
import { Card } from "./Card";
import { HeadingGroup } from "./HeadingGroup";

export const ContactForm = (props: StackProps) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [selected, setSelected] = React.useState("");
  //   Form validation state
  const [errors, setErrors] = React.useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = React.useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showFailureMessage, setShowFailureMessage] = React.useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors: any;
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (selected.length <= 0) {
      tempErrors["elected"] = true;
      isValid = false;
    }
    // if (subject.length <= 0) {
    //   tempErrors["subject"] = true;
    //   isValid = false;
    // }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
          selected: selected,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setSelected("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setSelected("");
    }
  };
  return (
    <Stack as="section" spacing="6" {...props}>
      <HeadingGroup
        title="Contact"
        description="Mail Us"
        mail="info@codeheadless.com"
      />
      <Card>
        <Stack divider={<StackDivider />} spacing="6">
          <form method="post" name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Stack
              direction={{ base: `column`, md: `column` }}
              width="full"
              spacing="4"
              mb="5"
            >
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
            </Stack>
            <Stack width="full" spacing="4">
              <FormControl>
                <FormLabel>Budget</FormLabel>
                <Select
                  value={selected}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => {
                    setSelected(e.target.value);
                  }}
                >
                  <option value="lessthan5000">Less than $5,000</option>
                  <option value="lessthan10000">Less than $10,000</option>
                  <option value="lessthan20000">Less than $20,000</option>
                  <option value="20000_50000">$20,000 to $50,000</option>
                  <option value="50000_100000">$50,000 to $100,000</option>
                  <option value="100000_200000">$100,000 to $200,000</option>
                  <option value="morethan200000">$200,000 +</option>
                </Select>
              </FormControl>
              <FormControl id="message">
                <FormLabel>Project Details</FormLabel>
                <Textarea
                  id="message"
                  required
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                mt="5"
                size="lg"
                variant="with-corner"
                maxW="40"
                textAlign="left"
                bg="red"
                color="white"
                _hover={{ bg: "black" }}
              >
                {buttonText}
              </Button>
            </Stack>
            <div className="text-left">
              {showSuccessMessage && (
                <Text as="p" py="3">
                  Thankyou! Your Message has been delivered. We will reach you
                  shortly
                </Text>
              )}
              {showFailureMessage && (
                <Text as="p" py="3">
                  Oops! Something went wrong, please try again.
                </Text>
              )}
            </div>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
};
