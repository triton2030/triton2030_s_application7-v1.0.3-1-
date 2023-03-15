import React from "react";

import { Text } from "components";

type ConduitCompinentsEightRowbtccounterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ btcCounter: string; price: string; sago: string }>;

const ConduitCompinentsEightRowbtccounter: React.FC<
  ConduitCompinentsEightRowbtccounterProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
          <Text
            className="font-aeonikfono font-normal not-italic text-left text-red_600 w-[auto]"
            as="h3"
            variant="h3"
          >
            {props?.btcCounter}
          </Text>
        </div>
        <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
          <Text
            className="font-aeonikfono font-normal not-italic text-blue_300 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            {props?.price}
          </Text>
        </div>
        <div className="flex flex-1 items-center justify-end px-[10px] w-[100%]">
          <Text
            className="font-aeonikfono font-normal not-italic text-blue_300 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            {props?.sago}
          </Text>
        </div>
      </div>
    </>
  );
};

ConduitCompinentsEightRowbtccounter.defaultProps = {
  btcCounter: "0.316 BTC",
  price: "$1,466.54",
  sago: "30s ago",
};

export default ConduitCompinentsEightRowbtccounter;
