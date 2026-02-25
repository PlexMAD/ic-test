import type { DistrictProperties } from "@/entities/geoObject";
import { DrawerHeader, DrawerTitle } from "@/shared";

export const DistrictInfo = ({ data }: { data: DistrictProperties }) => {
  console.log(data)
  return (
    <>
      <DrawerHeader className="gap-2">
        <DrawerTitle>Информация о районе {data.NAME}</DrawerTitle>
        <div className="text-sm text-muted-foreground">{data.NAME_AO}</div>
      </DrawerHeader>

      <div className="px-4 pb-4 space-y-4">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <div className="text-muted-foreground">Район</div>
          <div className="text-right">{data.NAME}</div>

          <div className="text-muted-foreground">Административный округ</div>
          <div className="text-right">{data.NAME_AO}</div>
        </div>
      </div>
    </>
  );
};
