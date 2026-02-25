import type { TrainProperties } from "@/entities";
import { DrawerHeader, DrawerTitle, formatStringBool } from "@/shared";

export const StationInfo = ({ data }: { data: TrainProperties }) => {
  return (
    <>
      <DrawerHeader className="gap-2">
        <DrawerTitle>Информация о станции {data.name_station}</DrawerTitle>

        <div className="text-sm text-muted-foreground">
          {data.type} • {data.name_line} ({data.no_line}) • {data.status}
        </div>
      </DrawerHeader>

      <div className="px-4 pb-4 space-y-4">
        <section className="space-y-2">
          <div className="text-sm font-medium">Основная информация</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Название</div>
            <div className="text-right">{data.name_station}</div>

            <div className="text-muted-foreground">Линия</div>
            <div className="text-right">
              {data.name_line} ({data.no_line})
            </div>

            <div className="text-muted-foreground">Тип станции</div>
            <div className="text-right">{data.type}</div>

            <div className="text-muted-foreground">Статус</div>
            <div className="text-right">{data.status}</div>

            <div className="text-muted-foreground">Пересадка</div>
            <div className="text-right">{formatStringBool(data.transfer)}</div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm font-medium">Расположение</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Административный округ</div>
            <div className="text-right">{data.administrative_district}</div>

            <div className="text-muted-foreground">Район</div>
            <div className="text-right">{data.area}</div>

            <div className="text-muted-foreground">Координаты</div>
            <div className="text-right font-mono">
              <p>Широта: {data.latitude}</p>
              <p>Долгота: {data.longitude}</p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm font-medium">Нагрузка</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Текущий пассажиропоток</div>
            <div className="text-right">{data.CurLd}</div>

            <div className="text-muted-foreground">Текущая загрузка</div>
            <div className="text-right">{data.CurLdRel}</div>
          </div>
        </section>
      </div>
    </>
  );
};
