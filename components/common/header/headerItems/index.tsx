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

// https://www.notion.so/19c7add2a039801aa760cbbdc789a962?v=19c7add2a03980338991000c5061e8f8&pvs=4
// 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
