import { Button } from "@/shared/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/shared/ui/drawer";

export const ObjectInfo = () => {
  return (
    <Drawer direction="right">
      <DrawerContent>
        <DrawerHeader>Дровер</DrawerHeader>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
