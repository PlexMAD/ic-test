import type { StreetProperties } from "@/entities";
import { DrawerHeader, DrawerTitle, formatStringBool } from "@/shared";

export const StreetInfo = ({ data }: { data: StreetProperties }) => {
  console.log(data);
  return (
    <>
      <DrawerHeader className="gap-2">
        <DrawerTitle>
          Информация о дороге {data.ST_NAME ?? "Без названия"}
        </DrawerTitle>

        <div className="text-sm text-muted-foreground">
          {data.ROAD_CATEG} • класс {data.FUNC_CLASS}
        </div>
      </DrawerHeader>

      <div className="px-4 pb-4 space-y-4">
        <section className="space-y-2">
          <div className="text-sm font-medium">Основная информация</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Название</div>
            <div className="text-right">{data.ST_NAME ?? "—"}</div>

            <div className="text-muted-foreground">Тип (префикс)</div>
            <div className="text-right">{data.ST_TYP_BEF ?? "—"}</div>

            <div className="text-muted-foreground">Базовое имя</div>
            <div className="text-right">{data.ST_NM_BASE ?? "—"}</div>

            <div className="text-muted-foreground">Класс дороги</div>
            <div className="text-right">{data.FUNC_CLASS ?? "—"}</div>

            <div className="text-muted-foreground">Категория</div>
            <div className="text-right">{data.ROAD_CATEG ?? "—"}</div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm font-medium">Параметры дороги</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Прямой радиус</div>
            <div className="text-right">{data.RbndStght ?? "—"}</div>

            <div className="text-muted-foreground">Обратный радиус</div>
            <div className="text-right">{data.RbndBck ?? "—"}</div>

            <div className="text-muted-foreground">Ширина</div>
            <div className="text-right">{data.Width ?? "—"}</div>

            <div className="text-muted-foreground">Разворот</div>
            <div className="text-right">{formatStringBool(data.U_TURN)}</div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm font-medium">Скорости</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Макс. скорость (прямо)</div>
            <div className="text-right">{data.MaxSpdDrct}</div>

            <div className="text-muted-foreground">
              Средняя скорость (прямо)
            </div>
            <div className="text-right">{data.AvgSpdDrct}</div>

            <div className="text-muted-foreground">
              Макс. скорость (обратно)
            </div>
            <div className="text-right">{data.MaxSpdRvrs}</div>

            <div className="text-muted-foreground">
              Средняя скорость (обратно)
            </div>
            <div className="text-right">{data.AvgSpdRvrs}</div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm font-medium">Доступность</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
            <div className="text-muted-foreground">Пешеходы</div>
            <div className="text-right">{formatStringBool(data.Foot)}</div>

            <div className="text-muted-foreground">Автомобили</div>
            <div className="text-right">{formatStringBool(data.Car)}</div>
          </div>
        </section>
      </div>
    </>
  );
};
