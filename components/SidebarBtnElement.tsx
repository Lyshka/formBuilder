import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SidebarBtnElementProps = {
  formElement: FormElement;
};

const SidebarBtnElement = ({ formElement }: SidebarBtnElementProps) => {
  const { icon: Icon, label } = formElement.designerBtnElement;

  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant={"outline"}
      className={cn(
        "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
        draggable.isDragging && "ring-2 ring-primary"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="w-8 h-8 text-primary cursor-grab" />

      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SidebarBtnElement;

export const SidebarBtnElementDragOverlay = ({
  formElement,
}: SidebarBtnElementProps) => {
  const { icon: Icon, label } = formElement.designerBtnElement;

  return (
    <Button
      variant={"outline"}
      className={"flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"}
    >
      <Icon className="w-8 h-8 text-primary cursor-grab" />

      <p className="text-xs">{label}</p>
    </Button>
  );
};
