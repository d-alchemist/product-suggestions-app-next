import { Grid, GridItem } from "@chakra-ui/react";
import SideNav from "./components/SideNav";
import Suggestions from "./components/Suggestions";

export default function Home() {
  return (
    <Grid
      templateColumns={{ base: "auto", lg: "repeat(7, 1fr)" }}
      bg="bg-white"
      gap="10"
    >
      <GridItem colSpan={{ base: 7, lg: 2 }}>
        <SideNav />
      </GridItem>
      <GridItem colSpan={{ base: 7, lg: 5 }}>
        <Suggestions />
      </GridItem>
    </Grid>
  );
}
