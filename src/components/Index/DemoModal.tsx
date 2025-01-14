import {Modal, ModalHeader, ModalBody, ModalContent, ModalFooter, Button} from "@nextui-org/react";

export default function DemoModal({isOpen, onClose}:{isOpen:boolean,onClose:()=>void}) {

    return(
        <Modal isOpen={isOpen}
               onClose={onClose}
               size="xs"
               placement={"auto"}
               classNames={{
                    backdrop: "z-[100002]", // to appear above the navbar
                    wrapper: "z-[100003]", // to appear above the backdrop
                }}
               backdrop={"transparent"}
               isDismissable={false}
               isKeyboardDismissDisabled={false}


        >
            <ModalContent>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
            </ModalContent>
        </Modal>
    )
}