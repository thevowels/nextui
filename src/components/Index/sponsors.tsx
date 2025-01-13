
import {Story2DesignLogo, CodeRabbitLogo} from "@/components/nextIcons/sponsors.tsx";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

const sponsors:{name:string,href:string,logo:any}[] = [
    {
        name: "story.to.design",
        href: "https://story.to.design?utm_source=nextui&utm_marketing=partnership",
        logo: <Story2DesignLogo className="pt-1" />,
    },
    {
        name: "CodeRabbit",
        href: "https://coderabbit.ai/?utm_source=nextui&utm_marketing=oss",
        logo: <CodeRabbitLogo />,
    },
];


export default function Sponsors() {
    return(
        <div className="flex flex-col items-center justify-center gap-4 mt-48">
            <p className={"text-large text-default-500"}>
                Supported and backed by
            </p>
            <div className={"flex flex-row flex-wrap items-center justify-center gap-4"}>
                {sponsors.map((sponsor) => (
                    <Link key={sponsor.name} className={"w-auto"}>
                        {sponsor.logo}
                    </Link>
                ))}

            </div>

        </div>
    )
}