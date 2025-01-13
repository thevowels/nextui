import { siteConfig } from "@/config/site";
import {Card, CardHeader, CardBody, } from "@nextui-org/card";
import { HiOutlineLightningBolt } from "react-icons/hi";


export default function Cards() {

    return(
        <div className={"mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}>

            {siteConfig.cards.map((card)=>(
                <Card>
                    <CardHeader className={"flex gap-3"}>
                        <div className={" text-2xl bg-secondary-100/80  rounded-full p-2"}>
                            <HiOutlineLightningBolt color="#FF1CF7" />

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