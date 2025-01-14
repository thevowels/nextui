import {
  title,
  subtitle,
  sectionWrapper,
  titleWrapper,
} from "@/components/primitives";

export default function Accessibility() {
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
      Accessibility
    </section>
  );
}
