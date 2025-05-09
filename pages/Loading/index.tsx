import { Center, Loader } from "@mantine/core";

export const Loading = () => {
  return (
    <Center h="100vh">
      <Loader size="xl" />
    </Center>
  );
};

export { Loading } from "./container";
