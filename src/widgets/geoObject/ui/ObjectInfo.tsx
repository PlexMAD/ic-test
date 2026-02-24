import {
  updateGeoObjectInfo,
  useGeoObjectInfo,
} from "../store/useGeoObjectInfoStore";
import { StationInfo } from "./StationInfo";
import { Button, Drawer, DrawerClose, DrawerContent } from "@/shared";

export const ObjectInfo = () => {
  const data = useGeoObjectInfo();

  return (
    <Drawer
      direction="right"
      open={!!data}
      onOpenChange={(open) => {
        if (!open) updateGeoObjectInfo(null);
      }}
    >
      <DrawerContent>
        {data?.kind === "train" && <StationInfo data={data.info} />}
        <DrawerClose asChild>
          <Button variant="outline" className="w-30 mx-auto">
            Закрыть
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
