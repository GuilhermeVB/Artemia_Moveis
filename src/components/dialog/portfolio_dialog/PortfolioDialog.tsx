import Card from "../../card/Card"
import Carousel from "../../carousel/Carousel"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

interface DialogSource {
  source: any
  orderAnimation: number
  cardTriggerIndex: number
}

export default function PortfolioDialog(props: DialogSource) {
  return (
    <Dialog>
      <DialogTrigger className={`round-[10px] dialog_animation_${props.orderAnimation}`}>
        <Card card={props.source[props.cardTriggerIndex]} />
      </DialogTrigger>
      <DialogContent className="dialog_content bg-transparent border-0 p-0 max-w-[28.125rem] round-[10px]">
        <DialogTitle className="hidden" />
        <Carousel cardSelected={props.cardTriggerIndex} source={props.source} />
        <DialogDescription className="hidden" />
      </DialogContent>
    </Dialog>
  )
}
