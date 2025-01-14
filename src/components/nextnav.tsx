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
import { Chip } from "@nextui-org/chip";
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
    <Navbar className={" justify-between"} maxWidth="2xl" position="sticky">
      <NavbarBrand>
        <NextLogo />
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="hidden md:flex p-0 bg-default-400/20 text-sm data-[hover=true]:bg-transparent h-7 rounded-full min-w-[100px] max-w-[100px]"
                endContent={<IoChevronDownSharp />}
                radius="sm"
                variant="flat"
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
        <Chip
          className={
            " hidden lg:flex bg-primary-100/50 cursor-pointer border-1 border-primary-100/80 ml-2"
          }
          classNames={{
            content:
              "font-semibold text-primary-500 dark:text-primary-600 text-xs ",
          }}
          variant="flat"
        >
          New version v2.6.0&nbsp;
          <span aria-label="emoji" role="img" className={"ps-2"}>
            🔥
          </span>
        </Chip>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-3 " justify="end">
        <NavbarItem>
          <Link className={clsx("font-bold")} color="foreground" href="#">
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
        <ThemeSwitch />
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
