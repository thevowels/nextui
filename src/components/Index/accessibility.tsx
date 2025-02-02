import { Card, CardHeader } from "@nextui-org/card";
import {DropdownSection, Tooltip} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {useState, useRef, Fragment} from "react";

import {
  KeyboardBoldIcon,
  MouseCircleBoldIcon,
  SquaresBoldIcon,
  FatrowsBoldIcon,
  EyeBoldIcon,
  KeyboardOpenBoldIcon,
  InfoBoldIcon,
} from "@/components/nextIcons";
import {
  title,
  subtitle,
  sectionWrapper,
  titleWrapper,
} from "@/components/primitives";
import {Dropdown, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
const a11yItems = [
  {
    title: "Keyboard navigation",
    icon: <KeyboardBoldIcon />,
  },
  {
    title: "Managed focus",
    icon: <MouseCircleBoldIcon />,
  },
  {
    title: "Collision aware",
    icon: <SquaresBoldIcon />,
  },
  {
    title: "Alignment control",
    icon: <FatrowsBoldIcon />,
  },
  {
    title: "Screen reader support",
    icon: <EyeBoldIcon />,
  },
  {
    title: "Typehead support",
    icon: <KeyboardOpenBoldIcon />,
  },
];

export default function Accessibility() {
  const ref = useRef(null);
  const triggerRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className={sectionWrapper({ class: "mt-24 lg:mt-56" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper()}>
            <p className={title({ size: "lg" })}> Accessibility</p>
            <div>
              <p className={title({ color: "green", size: "lg" })}>
                out of the{" "}
              </p>
              <p className={title({ size: "lg" })}>box.</p>
            </div>
          </div>
          <div className={subtitle()}>
            NextUI components are built on top of{" "}
            <span className={"underline"}>React Aria </span> ensuring
            exceptional accessibility support as a top priority.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col mt-8 lg:mt-16 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {a11yItems.map((item) => (
              <Card
                key={item.title}
                isPressable
                className={"bg-white dark:bg-default-400/10 "}
              >
                <CardHeader className={"font-semibold text-base"}>
                  <div
                    className={
                      "text-2xl p-2 bg-default-100 dark:bg-transparent text-default-500/50"
                    }
                  >
                    {item.icon}
                  </div>
                  {item.title}
                </CardHeader>
              </Card>
            ))}
          </div>
          <Button
            aria-label="Learn more about accessibility"
            className="max-w-fit"
            color="success"
            radius="full"
            size="sm"
            variant="flat"
          >
            Learn more
          </Button>
        </div>
        <div>
          <div
            className={
              "flex relative  w-full h-auto min-h-[200px] lg:min-h-[390px] max-h-[300px] lg:pt-24 items-center lg:items-start justify-center  bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] rounded-2xl"
            }
            ref={ref}
          >
            <Tooltip
              className={"text-xs px-2 "}
              content={"show Code"}
              placement="top"
            >
              <Button
                isIconOnly
                aria-label="Show code"
                className={"absolute top-1 right-1"}
                radius="full"
                variant="light"
              >
                <InfoBoldIcon className={"rotate-180"} />
              </Button>
            </Tooltip>
            <Button
              className="bg-success-50"
              color="success"
              variant="flat"
              ref={triggerRef}
              onPress={()=>setDropdownOpen((oldvalue)=>!oldvalue)}
            >
              Actions
            </Button>
                <Dropdown

                  className="shadow-xl"
                  closeOnSelect={true}
                  isOpen={dropdownOpen}
                  placement="bottom"
                  portalContainer={ref!.current || undefined}
                  shouldBlockScroll={false}
                  triggerRef={triggerRef}


                >
                  <Fragment/>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownSection showDivider title={"Action"}>
                      <DropdownItem key="new">New file</DropdownItem>
                      <DropdownItem key="copy">Copy link</DropdownItem>
                      <DropdownItem key="edit">Edit file</DropdownItem>

                    </DropdownSection>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

          </div>
        </div>
      </div>
    </section>
  );
}
