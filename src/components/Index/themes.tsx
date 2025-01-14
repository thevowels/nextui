import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import {
  title,
  subtitle,
  sectionWrapper,
  titleWrapper,
} from "@/components/primitives";
import {
  PaletteIcon,
  MagicIcon,
  GamingConsoleIcon,
  NextUILogo,
} from "@/components/nextIcons";

const themesTabs = (isMobile: boolean) => [
  {
    id: "nextui",
    title: () => (
      <p className="group-data-[selected=true]:text-primary">NextUI</p>
    ),
    icon: () => (
      <NextUILogo
        small
        className="text-default-400 group-data-[selected=true]:text-primary"
        size={isMobile ? 34 : 44}
      />
    ),
  },
  {
    id: "modern",
    title: () => (
      <p className="group-data-[selected=true]:text-secondary">Modern</p>
    ),
    icon: () => (
      <PaletteIcon
        className="group-data-[selected=true]:text-secondary"
        size={isMobile ? 34 : 44}
      />
    ),
  },
  {
    id: "elegant",
    title: () => (
      <p className="group-data-[selected=true]:text-foreground">Elegant</p>
    ),
    icon: () => <MagicIcon size={isMobile ? 34 : 44} />,
  },
  {
    id: "retro",
    title: () => (
      <p className="group-data-[selected=true]:text-warning">Retro</p>
    ),
    icon: () => (
      <GamingConsoleIcon
        className="group-data-[selected=true]:text-warning"
        size={isMobile ? 34 : 44}
      />
    ),
  },
];

// const codeHighlights = {
//   nextui: "6-19",
//   modern: "26-39",
//   elegant: "46-59",
//   retro: "66-84",
// };

export default function Themes() {
  const isMobile: boolean = false;
  const tabs = themesTabs(isMobile);

  return (
    <section className={sectionWrapper({ class: "mt-24 lg:mt-56" })}>
      <div className={"flex flex-col gap-8"}>
        <div>
          <div className={titleWrapper()}>
            <p className={title({ size: "lg" })}>Apply your own</p>
            <div>
              <p className={title({ color: "blue", size: "lg" })}>theming </p>
              <p className={title({ size: "lg" })}>decisions.</p>
            </div>
          </div>
          <p className={subtitle()}>
            NextUI provides a custom TailwindCSS plugin that allows you to
            customize the default themes or create your own.
          </p>
        </div>

        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4"}>
          <Tabs
            aria-label="Dynamic tabs"
            disableAnimation
            disableCursorAnimation
            classNames={{
              base: "w-full",
              tab: "px-0 w-fit h-auto data-[selected=true]:bg-transparent",
              tabList: "w-full justify-start gap-8",
              tabContent: "text-default-400 text-base",
            }}
            items={tabs}
            variant="light"
          >
            {(item) => (
              <Tab
                key={item.id}
                title={
                  <div className={"!bg-transparent"}>
                    <div
                      className={
                        "flex flex-col justify-center items-center gap-2"
                      }
                    >
                      {item.icon()}
                      {item.title()}
                    </div>
                  </div>
                }
              >
                <Card>
                  <CardBody>{item.id}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
