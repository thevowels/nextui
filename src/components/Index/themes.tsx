import {
  title,
  subtitle,
  sectionWrapper,
  titleWrapper,
} from "@/components/primitives";

export default function Themes() {
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
      </div>
    </section>
  );
}
