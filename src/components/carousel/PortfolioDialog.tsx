import Card from "../card/Card"
import PortfolioCarousel from "./PortfolioCarousel"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

interface DialogSource {
  source: any
  order: number
}

export default function PortfolioDialog(props: DialogSource) {
  return (
    <Dialog>
      <DialogTrigger className={`round-[10px] dialog_animation_${props.order}`}>
        <Card card={props.source} />
      </DialogTrigger>
      <DialogContent className="dialog_content bg-transparent border-0 p-0 max-w-[28.125rem] round-[10px]">
        <DialogTitle className="hidden" />
        <PortfolioCarousel source={props.source} />
        <DialogDescription className="hidden" />
      </DialogContent>
    </Dialog>
  )
}
