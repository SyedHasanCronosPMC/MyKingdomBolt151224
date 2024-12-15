import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WaitlistForm } from "./hero/WaitlistForm";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-kingdom-dark border-kingdom-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text text-center">
            Join Our Waitlist
          </DialogTitle>
        </DialogHeader>
        <WaitlistForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};