import { Button, Drawer, DrawerClose, DrawerContent } from "@/shared";

import { updateGeoObjectInfo, useGeoObjectInfo } from "@/features";
import { BusInfo } from "./BusInfo";
import { DistrictInfo } from "./DistrictInfo";
import { StationInfo } from "./StationInfo";
import { StreetInfo } from "./StreetInfo";

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
        {data?.kind === "district" && <DistrictInfo data={data.info} />}
        {data?.kind === "bus" && <BusInfo data={data.info} />}
        {data?.kind === "street" && <StreetInfo data={data.info} />}
        <DrawerClose asChild>
          <Button variant="outline" className="w-30 mx-auto">
            Закрыть
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
