import React from "react";

import { Text } from "components";

type ConduitCompinentsEightRowpriceProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ long: string; btcperp: string; price: string }>;

const ConduitCompinentsEightRowprice: React.FC<
  ConduitCompinentsEightRowpriceProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[5px] items-start justify-start self-stretch w-[auto]">
          {!!props?.long ? (
            <Text
              className="font-aeonik font-normal not-italic text-left text-teal_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              {props?.long}
            </Text>
          ) : null}
          <Text
            className="font-aeonik font-normal not-italic text-left text-white_A700 w-[auto]"
            as="h3"
            variant="h3"
          >
            {props?.btcperp}
          </Text>
        </div>
        <Text
          className="font-aeonikfono font-normal not-italic text-left text-teal_A700 w-[auto]"
          as="h3"
          variant="h3"
        >
          {props?.price}
        </Text>
      </div>
    </>
  );
};

ConduitCompinentsEightRowprice.defaultProps = {
  btcperp: "BTC-PERP",
  price: "$1,435.89",
};

export default ConduitCompinentsEightRowprice;
