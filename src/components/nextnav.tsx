import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { IoChevronDownSharp } from "react-icons/io5";
import clsx from "clsx";

import { GithubIcon, NextLogo } from "@/components/icons.tsx";
import { siteConfig } from "@/config/site.ts";
import { ThemeSwitch } from "@/components/theme-switch.tsx";

export const NextNav = () => {
  return (
    <Navbar maxWidth="2xl" position="sticky" className={"px-10"}>
      <NavbarBrand>
        <NextLogo />
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<IoChevronDownSharp />}
                radius="sm"
                variant="light"
              >
                v2.0.0
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[120px]"
            itemClasses={{
              base: "gap-2",
            }}
          >
            <DropdownItem
              key="a"
              // description="ACME scales apps to meet user demand, automagically, based on load."
              endContent={<IoChevronDownSharp />}
            >
              v1.0.0
            </DropdownItem>
            <DropdownItem
              key="b"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              endContent={<IoChevronDownSharp fill={"currentColor"} />}
            >
              v2.0.0
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-3 " justify="end">
        <NavbarItem>
          <Link color="foreground" href="#" className={clsx("font-bold",)}>
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="primary" href="#">
            Components
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Figma
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Roadmap
          </Link>
        </NavbarItem>
          <ThemeSwitch/>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />

        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
