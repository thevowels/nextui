import { siteConfig } from "@/config/site";
import {Card, CardHeader, CardBody, } from "@nextui-org/card";
import { HiOutlineLightningBolt } from "react-icons/hi";
import Contents from "@/content/landing";

export default function Cards() {

    return(
        <div className={"mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>

            {Contents.topFeatures.map((card, index : number)=>(
                <Card key={card.title} isBlurred isPressable>
                    <CardHeader className={"flex gap-3"}>
                        <div className={" text-2xl bg-secondary-100/80  rounded-full p-2 text-[#FF1CF7]"}>
                            {card.icon}
                        </div>
                        <p className={"font-semibold"}>
                            {card.title}

                        </p>
                    </CardHeader>
                    <CardBody>
                        <p className={"font-normal text-medium text-default-500"}>
                            {card.description}
                        </p>
                    </CardBody>
                </Card>
            ))}

        </div>
    )
}