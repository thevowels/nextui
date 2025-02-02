import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons.tsx";
import Hero from "@/components/Index/hero.tsx";
import Cards from "@/components/Index/Cards.tsx";
import Sponsors from "@/components/Index/sponsors.tsx";
import Themes from "@/components/Index/themes.tsx";
import Accessibility from "@/components/Index/accessibility.tsx";

export default function IndexPage() {
  return (
      <div className={"flex flex-col items-center justify-center"}>
          <Hero/>
          <Cards/>
          <Sponsors/>


          {/*  Theme*/}
          <Themes/>

          {/*Accessibility*/}
          <Accessibility/>

          {/*Dark Mode*/}

          {/*Customization*/}

          {/*Pro*/}

          {/*features*/}

          {/*support*/}

          {/*prettier*/}

          {/*community*/}
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
              <div className="inline-block max-w-lg text-center justify-center">
                  <span className={title()}>Make&nbsp;</span>
                  <span className={title({color: "violet"})}>beautiful&nbsp;</span>
                  <br/>
                  <span className={title()}>
            websites regardless of your design experience.
          </span>
                  <div className={subtitle({class: "mt-4"})}>
                      Beautiful, fast and modern React UI library.
                  </div>
              </div>

              <div className="flex gap-3">
                  <Link
                      isExternal
                      className={buttonStyles({
                          color: "primary",
                          radius: "full",
                          variant: "shadow",
                      })}
                      href={siteConfig.links.docs}
                  >
                      Documentation
                  </Link>
                  <Link
                      isExternal
                      className={buttonStyles({variant: "bordered", radius: "full"})}
                      href={siteConfig.links.github}
                  >
                      <GithubIcon size={20}/>
                      GitHub
                  </Link>
              </div>

              <div className="mt-8">
                  <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
                <Code color="primary">pages/index.tsx</Code>
            </span>
                  </Snippet>
              </div>
          </section>

      </div>
  );
}
