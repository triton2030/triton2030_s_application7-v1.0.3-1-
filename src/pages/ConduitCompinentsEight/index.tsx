import React from "react";

import { Img, Text, Button, List, Line } from "components";
import ConduitCompinentsEightRowbtccounter from "components/ConduitCompinentsEightRowbtccounter";
import ConduitCompinentsEightRowprice from "components/ConduitCompinentsEightRowprice";
import ConduitCompinentsEightRowlanguage from "components/ConduitCompinentsEightRowlanguage";

const ConduitCompinentsEightPage: React.FC = () => {
  return (
    <>
      <div className="flex font-aeonik items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_900 flex flex-col gap-[16px] h-[] md:h-[auto] items-start justify-start max-w-[] p-[24px] sm:px-[20px] w-[100%]">
          <header className="flex md:flex-col flex-row md:gap-[10px] items-center justify-between md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[32px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
              <Img
                src="images/img_frame157.svg"
                className="h-[20px] w-[192px]"
                alt="frame157"
              />
              <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-center justify-start self-stretch w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[26%] my-[2px]">
                  <div className="flex items-center justify-start px-[12px] py-[8px]">
                    <a
                      className="cursor-pointer font-medium text-[14px] text-blue_300 text-left w-[auto]"
                      href="javascript:"
                    >
                      Dashboard
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px]">
                  <Button
                    className="bg-gradient  border-b-[1px] border-cyan_A400 border-solid cursor-pointer flex items-center justify-center pl-[12px] pr-[6px] py-[8px]"
                    rightIcon={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="ml-[4px]"
                        alt="arrow_down"
                      />
                    }
                  >
                    <div className="font-medium text-[14px] text-cyan_A400 text-left">
                      Futures
                    </div>
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[17%] my-[2px]">
                  <div className="flex items-center justify-start px-[12px] py-[8px]">
                    <a
                      className="cursor-pointer font-medium text-[14px] text-blue_300 text-left w-[auto]"
                      href="javascript:"
                    >
                      Swap
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[29%] my-[2px]">
                  <div className="flex items-center justify-start px-[12px] py-[8px]">
                    <a
                      className="cursor-pointer font-medium text-[14px] text-blue_300 text-left w-[auto]"
                      href="javascript:"
                    >
                      Leaderboard
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[24px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <Img
                src="images/img_clock.svg"
                className="h-[24px] w-[24px]"
                alt="clock"
              />
              <Img
                src="images/img_qrcode.svg"
                className="h-[24px] w-[24px]"
                alt="qrcode"
              />
              <Img
                src="images/img_clock_cyan_a400.svg"
                className="h-[28px] w-[28px]"
                alt="clock_One"
              />
              <Img
                src="images/img_alarm.svg"
                className="h-[24px] w-[24px]"
                alt="alarm"
              />
              <div className="bg-gray_900 flex flex-row items-center justify-center pl-[8px] py-[6px] rounded-[13px] self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-blue_300 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Optimism
                </Text>
                <Img
                  src="images/img_arrowdown_indigo_700.svg"
                  className="h-[14px] w-[14px]"
                  alt="arrowdown"
                />
              </div>
              <div className="flex items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-aeonikfono font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    0xb30...9af7f
                  </Text>
                  <Text
                    className="font-aeonik font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $ 2,548.04
                  </Text>
                </div>
              </div>
              <div className="bg-gray_900 flex h-[28px] items-center justify-start outline outline-[4px] outline-blue_300 p-[9px] rounded-[50%] w-[28px]">
                <div className="bg-teal_A700 h-[10px] rounded-[50%] w-[10px]"></div>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-aeonikfono gap-[8px] items-start justify-start max-w-[] mx-[auto] md:px-[20px] w-[100%]">
            <div className="bg-gray_901 flex items-center justify-start px-[20px] py-[16px] rounded-[12px] self-stretch w-[auto]">
              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_image12.png"
                  className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                  alt="imageTwelve"
                />
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-aeonik font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    BTC-PERP Perpetual
                  </Text>
                  <Text
                    className="font-aeonikfono font-medium text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $ 22,911
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown_blue_300.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown_One"
                />
              </div>
            </div>
            <div className="bg-gray_901 flex flex-1 items-center justify-start sm:px-[20px] px-[40px] py-[16px] rounded-[12px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-[100%]">
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Index Price
                  </Text>
                  <Text
                    className="font-aeonikfono font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $22,907
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_minimize.svg"
                    className="h-[24px] w-[24px]"
                    alt="minimize"
                  />
                  <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                    <Text
                      className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      24h Volume
                    </Text>
                    <Text
                      className="font-aeonikfono font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $ 377,526,580
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    24h Change
                  </Text>
                  <Text
                    className="font-aeonikfono font-normal not-italic text-left text-teal_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    0.36%
                  </Text>
                </div>
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    1H Funding Rate
                  </Text>
                  <Text
                    className="font-aeonikfono font-normal not-italic text-left text-red_600 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    -0.001033%
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[59px] grid grid-cols-2 md:w-[100%] w-[32%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                    <Text
                      className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Open Interest (L)
                    </Text>
                    <Text
                      className="font-aeonikfono font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $5.41M / $12.57M
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                    <Text
                      className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Open Interest (S)
                    </Text>
                    <Text
                      className="font-aeonikfono font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $5.41M / $12.57M
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <List
              className="bg-gray_901 sm:flex-col flex-row md:gap-[40px] grid grid-cols-2 justify-between px-[20px] py-[16px] rounded-[12px] w-[260px]"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_frame.svg"
                  className="h-[24px] w-[24px]"
                  alt="frame"
                />
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    sUSD - 1.01
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $ 6,580
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_frame.svg"
                  className="h-[24px] w-[24px]"
                  alt="frame"
                />
                <div className="flex flex-col gap-[2px] items-start justify-center self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    OP - 2.52$
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    23.31
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row font-aeonik gap-[8px] items-start justify-start max-w-[] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_902 border-b-[1px] border-bluegray_900 border-solid flex flex-row gap-[32px] items-center justify-between p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Chart
                  </Text>
                  <Img
                    src="images/img_clock_blue_300.svg"
                    className="h-[10px] w-[28px]"
                    alt="clock_Two"
                  />
                </div>
                <div className="bg-gray_901 flex items-center justify-end p-[7px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Img
                    src="images/img_image25.png"
                    className="h-[434px] md:h-[auto] object-cover rounded-[14px] w-[100%]"
                    alt="imageTwentyFive"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-center w-[330px]">
                  <div className="bg-gray_901 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_902 border-b-[1px] border-bluegray_900 border-solid flex flex-row gap-[32px] items-center justify-between p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                      <div className="flex flex-row gap-[6px] items-start justify-start self-stretch w-[auto]">
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          BTC/sUSD Perps:
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Recent Trades
                        </Text>
                      </div>
                      <Img
                        src="images/img_clock_blue_300.svg"
                        className="h-[10px] w-[28px]"
                        alt="clock_Three"
                      />
                    </div>
                    <div className="bg-gray_902 flex flex-col font-aeonikfono gap-[4px] items-start justify-start p-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-blue_100 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          53%
                        </Text>
                        <Text
                          className="font-normal not-italic text-indigo_700 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Skew
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_100 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          47%
                        </Text>
                      </div>
                      <div className="h-[8px] overflow-hidden relative rounded-[22px] w-[100%]">
                        <div className="w-full h-full absolute bg-teal_A700 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-pink_400"
                          style={{ width: "48%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gray_901 flex flex-col font-aeonikfono gap-[12px] items-start justify-start p-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <List
                        className="border-b-[1px] border-gray_900 border-solid sm:flex-col flex-row gap-[4px] grid grid-cols-3 justify-start py-[2px] w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="flex items-center justify-end px-[8px] py-[2px] w-[88px]">
                          <Text
                            className="font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Amount
                          </Text>
                        </div>
                        <div className="flex items-center justify-end px-[8px] py-[2px] w-[102px]">
                          <Text
                            className="font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Price
                          </Text>
                        </div>
                        <div className="flex items-center justify-end px-[8px] py-[2px] w-[102px]">
                          <Text
                            className="font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Time
                          </Text>
                        </div>
                      </List>
                      <List
                        className="flex-col gap-[2px] grid items-start w-[100%]"
                        orientation="vertical"
                      >
                        <ConduitCompinentsEightRowbtccounter
                          className="bg-gray_900_7f flex flex-1 flex-row items-center justify-start my-[0] rounded-[2px] w-[100%]"
                          btcCounter="0.316 BTC"
                          price="$1,466.54"
                          sago="30s ago"
                        />
                        <div className="flex flex-1 flex-row gap-[4px] items-center justify-start my-[0] w-[100%]">
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-teal_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              0.346 BTC
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $1,876.56
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[10px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              37s ago
                            </Text>
                          </div>
                        </div>
                        <ConduitCompinentsEightRowbtccounter
                          className="bg-gray_900_7f flex flex-1 flex-row items-center justify-start my-[0] rounded-[2px] w-[100%]"
                          btcCounter="0.316 BTC"
                          price="$1,466.54"
                          sago="30s ago"
                        />
                        <div className="flex flex-1 flex-row gap-[4px] items-center justify-start my-[0] w-[100%]">
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-teal_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              0.766 BTC
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $1,566.57
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[10px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              39s ago
                            </Text>
                          </div>
                        </div>
                        <ConduitCompinentsEightRowbtccounter
                          className="bg-gray_900_7f flex flex-1 flex-row items-center justify-start my-[0] rounded-[2px] w-[100%]"
                          btcCounter="0.116 BTC"
                          price="$1,566.51"
                          sago="30s ago"
                        />
                        <div className="flex flex-1 flex-row gap-[4px] items-center justify-start my-[0] w-[100%]">
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-teal_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              0.96 BTC
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $1,586.52
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[10px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              50s ago
                            </Text>
                          </div>
                        </div>
                        <ConduitCompinentsEightRowbtccounter
                          className="bg-gray_900_7f flex flex-1 flex-row items-center justify-start my-[0] rounded-[2px] w-[100%]"
                          btcCounter="0.146 BTC"
                          price="$1,544.51"
                          sago="31s ago"
                        />
                        <div className="flex flex-1 flex-row gap-[4px] items-center justify-start my-[0] w-[100%]">
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-teal_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              0.936 BTC
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[8px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $1,586.52
                            </Text>
                          </div>
                          <div className="flex flex-1 items-center justify-end px-[10px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-blue_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              50s ago
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_902 border-b-[1px] border-bluegray_900 border-solid flex sm:flex-col flex-row gap-[32px] items-center justify-between px-[8px] py-[4px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[4px] items-center justify-start self-stretch sm:w-[100%] w-[]">
                      <div className="flex items-center justify-center px-[12px] py-[6px] self-stretch w-[]">
                        <Text
                          className="flex font-normal not-italic text-blue_100 text-left w-[100px]"
                          as="h3"
                          variant="h3"
                        >
                          {" "}
                          BTC/sUSD Perp:
                        </Text>
                      </div>
                      <div className="bg-bluegray_900 flex flex-row gap-[4px] items-center justify-center px-[15px] py-[6px] rounded-[6px] self-stretch w-[auto]">
                        <Text
                          className="font-aeonik font-normal not-italic text-blue_100 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Positions
                        </Text>
                        <Text
                          className="bg-blue_300 flex font-aeonikfono font-normal h-[16px] items-center justify-center not-italic rounded-[50%] text-blue_100 text-center w-[16px]"
                          as="h3"
                          variant="h3"
                        >
                          4
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[4px] grid grid-cols-2 sm:w-[100%] w-[36%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-row gap-[4px] items-center justify-center px-[15px] py-[6px] self-stretch w-[auto]">
                          <Text
                            className="font-aeonik font-normal not-italic text-blue_100 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Orders
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_700 border-solid flex font-aeonikfono font-normal h-[16px] items-center justify-center not-italic rounded-[50%] text-blue_100 text-center w-[16px]"
                            as="h3"
                            variant="h3"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-center px-[15px] py-[6px] self-stretch w-[auto]">
                          <Text
                            className="font-aeonik font-normal not-italic text-blue_100 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Trades
                          </Text>
                          <Text
                            className="border-[1px] border-indigo_700 border-solid flex font-aeonikfono font-normal h-[16px] items-center justify-center not-italic rounded-[50%] text-blue_100 text-center w-[16px]"
                            as="h3"
                            variant="h3"
                          >
                            4
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[4px] items-center justify-center px-[15px] py-[6px] self-stretch w-[auto]">
                        <Text
                          className="font-aeonik font-normal not-italic text-blue_100 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Transfers
                        </Text>
                        <Text
                          className="border-[1px] border-indigo_700 border-solid flex font-aeonikfono font-normal h-[16px] items-center justify-center not-italic rounded-[50%] text-blue_100 text-center w-[16px]"
                          as="h3"
                          variant="h3"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_clock_blue_300.svg"
                      className="h-[10px] w-[28px]"
                      alt="clock_Four"
                    />
                  </div>
                  <div className="bg-gray_901 flex items-center justify-center p-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="bg-gray_901 border-[1px] border-bluegray_900 border-solid flex flex-col gap-[12px] items-start justify-start p-[12px] rounded-[6px] w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-start w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-[8px] items-center justify-start w-[100%]">
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            long="LONG"
                            btcperp="BTC-PERP"
                            price="$1,435.89"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Size"
                            price="0.75 ($1,183.82)"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Avg Entry"
                            price="$1,435.89"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Realized P&L"
                            price="-$1.43 (-9.20%)"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[8px] items-center justify-start w-[100%]">
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Leverage"
                            price="19.61x"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Unrealized P&L"
                            price="$1.43 (9.20%)"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Liq Price"
                            price="$1,435.89"
                          />
                          <ConduitCompinentsEightRowprice
                            className="bg-gray_902 flex flex-row items-start justify-between px-[8px] py-[4px] rounded-[4px] w-[100%]"
                            btcperp="Net Funding"
                            price="$1.43"
                          />
                        </div>
                      </List>
                      <Text
                        className="border-[1px] border-red_600 border-solid flex font-normal justify-center not-italic px-[8px] py-[4px] rounded-[4px] text-left text-red_600 w-[100%]"
                        as="h3"
                        variant="h3"
                      >
                        Close Position
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-bluegray_900 border-solid flex flex-col font-aeonikfono gap-[4px] h-[61px] md:h-[auto] items-center justify-center p-[8px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_frame_cyan_a400.svg"
                  className="h-[1px] w-[24px]"
                  alt="frame"
                />
                <Text
                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Add Widget
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-start justify-start max-w-[20vw] min-w-[350px] self-stretch w-[100%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-bluegray_900_7f border-b-[1px] border-bluegray_900 border-solid flex flex-row gap-[32px] items-center justify-between p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-blue_300 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Order Form
                  </Text>
                  <Img
                    src="images/img_clock_blue_300.svg"
                    className="h-[10px] w-[28px]"
                    alt="clock_Five"
                  />
                </div>
                <div className="bg-gray_902 flex items-start justify-start px-[5px] py-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-end justify-start w-[100%]">
                    <div className="flex items-start justify-start px-[5px] w-[100%]">
                      <Button
                        className="bg-cyan_A400 cursor-pointer flex items-center justify-center p-[10px] rounded-[8px] shadow-bs w-[100%]"
                        rightIcon={
                          <Img
                            src="images/img_contrast.svg"
                            className="ml-[10px]"
                            alt="contrast"
                          />
                        }
                      >
                        <div className="font-medium text-[14px] text-gray_901 text-left">
                          Deposit in BTC/sUSD Perp
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[3px] items-center justify-center p-[5px] w-[100%]">
                      <div className="flex flex-row gap-[4px] items-center justify-start w-[100%]">
                        <div className="bg-bluegray_900_7f flex flex-1 flex-col gap-[3px] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Your deposit:
                          </Text>
                          <Text
                            className="font-aeonikfono font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            100$
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrow1.svg"
                          className="h-[2px] max-h-[2px] w-[auto]"
                          alt="arrowOne"
                        />
                        <div className="bg-bluegray_900_7f flex flex-1 flex-col gap-[3px] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            25x multiplier:
                          </Text>
                          <Text
                            className="font-aeonikfono font-normal not-italic text-left text-teal_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            2,500$
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrow1.svg"
                          className="h-[2px] max-h-[2px] w-[auto]"
                          alt="arrowTwo"
                        />
                        <div className="bg-bluegray_900_7f flex flex-1 flex-col gap-[3px] items-start justify-start p-[8px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-aeonik font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            In positions:
                          </Text>
                          <Text
                            className="font-aeonikfono font-normal not-italic text-left text-red_600 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            -300$
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_frame178.svg"
                        className="h-[10px] w-[100%]"
                        alt="frame178"
                      />
                      <div className="bg-bluegray_900_7f flex flex-row gap-[7px] items-center justify-between px-[16px] py-[12px] rounded-[8px] w-[100%]">
                        <Text
                          className="font-medium text-blue_300 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Available:
                        </Text>
                        <Text
                          className="font-medium text-blue_100 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          2,200$
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[5px] w-[100%]">
                      <div className="bg-gradient1  flex flex-1 flex-col items-center justify-center p-[10px] rounded-[8px] w-[100%]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Long
                        </Text>
                        <div className="h-[22px] md:h-[auto] hidden items-start justify-start p-[10px] w-[22px]">
                          <Text
                            className="font-medium h-[12px] text-left text-white_A700 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Long
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gradient2  p-[2px] rounded-[8px] w-[49%] ">
                        <div className="bg-gray_902 border-solid flex flex-1 md:flex-1 flex-col items-center justify-center p-[10px] rounded-[8px] md:w-[100%]">
                          <Text
                            className="bg-clip-text bg-gradient2  font-medium text-left text-transparent w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Short
                          </Text>
                          <div className="h-[22px] md:h-[auto] hidden items-start justify-start p-[10px] w-[22px]">
                            <Text
                              className="font-medium h-[12px] text-left text-white_A700 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              Long
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_901 flex flex-col gap-[10px] items-start justify-start pb-[14px] pt-[10px] px-[16px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[35px] items-start justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Set Order Size:
                        </Text>
                        <div className="flex flex-row gap-[1px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Left:
                          </Text>
                          <Text
                            className="font-normal not-italic text-blue_300 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            1700$
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-end justify-between w-[100%]">
                        <Text
                          className="not-italic text-left text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          500
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          sUSD
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_901 flex flex-col gap-[10px] items-start justify-start px-[16px] py-[12px] rounded-[8px] w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Liquidation Price:
                        </Text>
                        <Text
                          className="font-normal not-italic text-blue_300 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Risk Level
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-between w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="not-italic text-left text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            1,145.54$
                          </Text>
                          <Text
                            className="not-italic text-left text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            (-20%)
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-left text-teal_A700 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          LOW
                        </Text>
                      </div>
                      <div className="flex font-aeonikfono items-center justify-start md:w-[100%] w-[98%]">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                          <div className="h-[17px] relative w-[98%]">
                            <Line className="absolute bg-gradient3  h-[4px] inset-[0] justify-center m-[auto] rounded-[2px] w-[100%]" />
                            <div className="absolute bg-gray_901 border-[1px] border-solid border-teal_A700 h-[17px] inset-y-[0] left-[13%] my-[auto] rounded-[8px] w-[17px]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-green_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              0$
                            </Text>
                            <Text
                              className="font-normal ml-[18px] not-italic text-green_300 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              500$
                            </Text>
                            <Text
                              className="font-normal ml-[199px] not-italic text-amber_500 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              2200$
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start px-[10px] py-[5px] self-stretch w-[auto]">
                        <Text
                          className="not-italic text-blue_300 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Increase position size margin to reduce risk
                        </Text>
                      </div>
                      <Button className="border-[1px] border-cyan_A400 border-solid cursor-pointer flex-1 font-normal not-italic px-[10px] py-[5px] rounded-[8px] text-[10px] text-blue_300 text-center w-[100%]">
                        Deposit more sUSD
                      </Button>
                    </div>
                    <div className="flex items-start justify-start p-[5px] w-[100%]">
                      <Button className="bg-gradient1  cursor-pointer font-medium px-[10px] py-[14px] rounded-[8px] text-[14px] text-center text-white_A700 w-[100%]">
                        Open Position
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[5px] w-[100%]">
                      <ConduitCompinentsEightRowlanguage
                        className="bg-bluegray_900_7f flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Position size is "
                        language_One=" 30,435.43%"
                        ofyourbuyingpow_One="of your buying power"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Available Margin:"
                        ofyourbuyingpow_One="33$"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="bg-bluegray_900_7f flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Margin Usage:"
                        ofyourbuyingpow_One="23.54%"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Buying Power:"
                        ofyourbuyingpow_One="1700$"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="bg-bluegray_900_7f flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Entry Price:"
                        ofyourbuyingpow_One="$1,626.67"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Trade fee:"
                        ofyourbuyingpow_One="$0.00 (taker 0.100%)"
                      />
                      <ConduitCompinentsEightRowlanguage
                        className="bg-bluegray_900_7f flex flex-row items-start justify-between px-[10px] py-[5px] rounded-[8px] w-[100%]"
                        language="Leverage in:"
                        ofyourbuyingpow_One="5x"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-bluegray_900 border-solid flex flex-col gap-[4px] h-[88px] md:h-[auto] items-center justify-center p-[8px] rounded-[8px] w-[100%]">
                <div className="block font-aeonik h-[72px] md:h-[73px] relative w-[45%]">
                  <Img
                    src="images/img_plus.svg"
                    className="absolute bottom-[0] h-[24px] left-[0] w-[24px]"
                    alt="plus"
                  />
                  <div className="absolute bg-bluegray_900 bottom-[] flex flex-col h-[] items-center justify-center mb-[] mt-[] pl-[16px] pr-[12px] py-[12px] right-[] rounded-[20px] self-stretch top-[] w-[]">
                    <div className="flex flex-row gap-[10px] items-center justify-start self-stretch text-left w-[111px]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[14px] w-[14px]"
                        alt="grid"
                      />
                      <Text
                        className="font-bold text-blue_100 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Add Widget
                      </Text>
                    </div>
                    <div className="hidden items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold leading-[16.00px] text-blue_100 text-left"
                        as="h3"
                        variant="h3"
                      >
                        <>
                          23f23f23f32f
                          <br />
                          23f23f23f23
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-aeonikfono font-normal not-italic text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Add Widget
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConduitCompinentsEightPage;
