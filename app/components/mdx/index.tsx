import { Text, Heading, Code } from "@chakra-ui/react";
import NextImage from "next/image";
import { shimmer, toBase64 } from "../../utils";
export const MdxComponents: any = {
  img: (props: any) => {
    return (
      <NextImage
        {...props}
        layout="responsive"
        width="580px"
        height="320px"
        objectFit="contain"
        alt={props.title}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(580, 320)
          )}`}
      />
    );
  },
  code: (props: any) => (
    <Code
      fontSize="md"
      color="red"
      bg="blackAlpha.200"
      p="6"
      mb="4"
      {...props}
    />
  ),
  p: (props: any) => <Text variant="p" fontSize="lg" mb="4" {...props} />,
  h2: (props: any) => <Heading variant="h2" fontSize="3xl" mb="4" {...props} />,
  h3: (props: any) => <Heading variant="h3" fontSize="2xl" mb="4" {...props} />,
};
