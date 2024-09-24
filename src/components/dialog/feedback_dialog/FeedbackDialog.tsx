import Carousel from "../../carousel/Carousel"
import FeedbackBox from "@/components/feedbackbox/FeedbackBox"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog"

interface DialogSource {
    source: any
    comment: string
    cardTriggerIndex: number
}

export default function FeedbackDialog(props: DialogSource) {
    return (
        <Dialog>
            <DialogTrigger className={"round-[10px]"}>
                <FeedbackBox
                    source={props.source[props.cardTriggerIndex]}
                    comment={props.comment}
                />
            </DialogTrigger>
            <DialogContent className="dialog_content bg-transparent border-0 p-0 max-w-[28.125rem] round-[10px]">
                <DialogTitle className="hidden" />
                    <Carousel cardSelected={props.cardTriggerIndex} source={props.source} />
                <DialogDescription className="hidden" />
            </DialogContent>
        </Dialog>
    )
}
