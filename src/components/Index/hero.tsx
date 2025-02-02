import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import { Snippet } from "@nextui-org/snippet";
import { subtitle, title } from "@/components/primitives.ts";
import { GithubIcon } from "@/components/icons.tsx";
export default function Hero() {
  return (
    <section className="flex flex-row container h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)] flex-no-wrap justify-between max-w-full">
      <div className="flex flex-col inline-block max-w-4xl md:max-w-8xl lg:max-w-2xl  text-center md:text-start justify-center align-end">
        <div>
          <span className={title({ size: "lg" })}>Make&nbsp;</span>
          <span className={title({ color: "violet", size: "lg" })}>
            beautiful&nbsp;
          </span>
          <span className={title({ size: "lg" })}>
            websites regardless of your design experience.
          </span>
        </div>

        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
        <div className={" flex flex-col items-center md:flex-row gap-4 "}>
          <Button
            className={"w-full md:w-auto md:h-11"}
            color="primary"
            endContent={
              <FaArrowRight
                className={
                  "group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                }
              />
            }
            radius={"full"}
            size={"lg"}
          >
            Get Started
          </Button>
          {/*<Code radius={"full"} size={"md"}*/}
          {/*  className={"text-small px-2 py-3 w-full md:w-auto"}*/}
          {/*>*/}
          {/*    <span className={"select-none text-large me-2"}>*/}
          {/*        $*/}
          {/*    </span>*/}
          {/*    <span>*/}
          {/*        npm install @nextui-org/react*/}
          {/*    </span>*/}
          {/*    <GoCopy className="text-xl inline-block ms-4 me-2" />*/}
          {/*</Code>*/}
          <Snippet className={"rounded-full hidden md:flex"}>
            npx nextui-cli@latest init
          </Snippet>
          <Button
            className={" md:hidden rounded-full w-full h-11"}
            startContent={<GithubIcon />}
            variant={"bordered"}
          >
            Github
          </Button>
        </div>
      </div>
      <div className="inline-flex max-w-2xl text-center justify-center hidden lg:block ">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>
    </section>
  );
}
