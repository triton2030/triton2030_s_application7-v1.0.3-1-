import React from "react";

import { Text } from "components";

type ConduitCompinentsEightRowlanguageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    language: string;
    language_One: string;
    ofyourbuyingpow_One: string;
  }>;

const ConduitCompinentsEightRowlanguage: React.FC<
  ConduitCompinentsEightRowlanguageProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          {props?.language}
        </Text>
        {!!props?.language_One ? (
          <Text
            className="font-aeonikfono font-normal not-italic text-cyan_A400 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            {props?.language_One}
          </Text>
        ) : null}
        <Text
          className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          {props?.ofyourbuyingpow_One}
        </Text>
      </div>
    </>
  );
};

ConduitCompinentsEightRowlanguage.defaultProps = {
  language: "Position size is ",
  ofyourbuyingpow_One: "of your buying power",
};

export default ConduitCompinentsEightRowlanguage;
