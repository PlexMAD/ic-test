import type { BusProperties } from "@/entities/geoObject";

export const BusInfo = ({ data }: { data: BusProperties }) => {
  return (
    <div className="px-4 py-3 space-y-4">
      <div className="text-lg font-semibold">Автобусная остановка {data.name_mpv}</div>

      <div className="text-sm text-muted-foreground">
        Маршруты: {data.marshrut}
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        <div className="text-muted-foreground">Адрес</div>
        <div className="text-right">{data.address_mpv}</div>

        <div className="text-muted-foreground">Район</div>
        <div className="text-right">{data.rayon}</div>

        <div className="text-muted-foreground">Округ</div>
        <div className="text-right">{data.ao}</div>

        <div className="text-muted-foreground">Координаты</div>
        <div className="text-right font-mono">
          <p>Широта: {data.x}</p>
          <p>Долгота: {data.y}</p>
        </div>
      </div>
    </div>
  );
};
