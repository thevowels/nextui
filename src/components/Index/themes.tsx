import {Tabs, Tab, Card, CardBody, Image, RadioGroup, Radio} from "@nextui-org/react";
import { useState, useMemo } from "react";
import { shopCartStyles } from "./shopcartstyles";
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
    StarIcon
} from "@/components/nextIcons";
import {Button} from "@nextui-org/button";

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


const itemSizes = ["xs", "s", "m", "l", "xl"];

// const codeHighlights = {
//   nextui: "6-19",
//   modern: "26-39",
//   elegant: "46-59",
//   retro: "66-84",
// };
type Theme = "nextui" | "modern" | "elegant" | "retro";
type Tab = { id: string; title: () => JSX.Element; icon: () => JSX.Element };

const CustomThemesExample = ({
  tabs,
  selectedTheme,
  onChangeTheme,
}: {
  tabs: Tab[];
  selectedTheme: Theme;
  onChangeTheme: (theme: Theme) => void;
}) => {
  const [liked, setLiked] = useState(false);

  const slots = useMemo(
    () =>
      shopCartStyles({
        theme: selectedTheme as Theme,
      }),
    [selectedTheme],
  );

  const onSelectionChange = (value: React.Key) => {
    onChangeTheme(value as Theme);
    console.log('changing selection', value)
  };

  return (
    <div className="flex flex-col gap-6 ">
      <Tabs
        disableAnimation
        disableCursorAnimation
        aria-label="Dynamic tabs"
        classNames={{
          base: "w-full",
          tab: "px-0 w-fit h-auto data-[selected=true]:bg-transparent",
          tabList: "w-full justify-start gap-8",
          tabContent: "text-default-400 text-base",
        }}
        items={tabs}
        variant="light"
        onSelectionChange={onSelectionChange}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className={"!bg-transparent"}>
                <div
                  className={"flex flex-col justify-center items-center gap-2"}
                >
                  {item.icon()}
                  {item.title()}
                </div>
              </div>
            }
          />
        )}
      </Tabs>
      <Card className={slots.wrapper()} radius={"lg"}>
        <CardBody className="relative flex-col md:flex-row md:items-center gap-4 md:gap-9 overflow-visible">
          <div className={slots.imageWrapper()}>
            <Image
              removeWrapper
              className={slots.img()}
              sizes={"100vw"}
              src="/shoes-1.png"
              />
          </div>
          <div className={slots.contentWrapper()}>
            <div className={"relative flex flex-wrap items-baseline"}>
              <h1 className={slots.title()}>Nike Adapt BB 2.0</h1>
              <p className={slots.description()}>Consistent, customized fit, game-changing.</p>
              <p className={slots.price()}>$279.97</p>
              <p className={slots.previousPrice()}>$350</p>
              <p className={slots.percentOff()}>20% off</p>
            </div>
            <RadioGroup
              aria-label="select size"
              classNames={{
                base:"my-4",
              }}
              defaultValue={"xs"}
              orientation="horizontal"
              >
              {itemSizes.map((itemSize) => (
                  <Radio
                    key={itemSize}
                   classNames={{
                     wrapper: "hidden",
                     labelWrapper: slots.sizeOption(),
                     label: slots.sizeOptionLabel(),
                   }}
                  value={itemSize}
                  >
                    {itemSize.toUpperCase()}
                  </Radio>
              ))}
            </RadioGroup>
            <div className={"flex space-x-4"}>
              <Button
                  className={slots.buyButton()}
                  color="primary"
                  variant={selectedTheme === "nextui" ? "shadow" : "solid"}
              >
                Buy now
              </Button>
              <Button
                  className={slots.addToBagButton()}
                  color="primary"
                  radius="full"
                  variant="bordered"
              >
                Add to bag
              </Button>
            </div>
          </div>
          <Button
              isIconOnly
              aria-label="like"
              className={slots.starButton()}
              data-liked={liked}
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
          >
            <StarIcon fill={liked ? "currentColor" : "none"} size={20} />
          </Button>

        </CardBody>
      </Card>

    </div>
  );
};

export default function Themes() {
  const isMobile: boolean = false;
  const tabs = themesTabs(isMobile);

  const [selectedTheme, setSelectedTheme] = useState<Theme>("nextui");

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
          <CustomThemesExample
            selectedTheme={selectedTheme}
            tabs={tabs}
            onChangeTheme={setSelectedTheme}
          />
          <div>asdfasddfk asdfas dfa sdf</div>

        </div>
      </div>
    </section>
  );
}
