import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="linear-gradient(135deg, #FBEAFF 10%, #845EC2 50%, #FBEAFF 100%)"
      // minH={["10vh", "5vh"]}
      w="100vw"
      // h=""
      p={1}
      color="white"
      fontSize="11px"
      alignItems="center"
      justifyContent={"center"}
      display="flex"
      bottom={0}
      position="fixed"
    >
      Created by Vincent Okolo, Taro Schenker, Muhammed Ismael Ali & Florencia
      Pezcara
    </Box>
  );
};

export default Footer;
