import { Badge, Grid } from "@mantine/core";
import React from "react";

interface Props {
  items: {
    name: string;
    onClick: () => void;
  }[];
}

export const HeaderItems: React.FC<Props> = ({ items }) => {
  return (
    <>
      <Grid>
        {items.map((item, index) => (
          <Badge
            key={index}
            variant="transparent"
            color="blue"
            size="xl"
            onClick={item.onClick}
          >
            {item.name}
          </Badge>
        ))}
      </Grid>
    </>
  );
};
