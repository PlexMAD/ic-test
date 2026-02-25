import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import React from "react";
import type { FormState } from "./FormType";

const TrainForm = ({
  form,
  setForm,
}: {
  form: FormState;
  setForm: (value: React.SetStateAction<FormState>) => void;
}) => {
  if (form.kind != "Train") return;
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label>Название станции *</Label>
          <Input
            value={form.name_station}
            onChange={(e) => setForm({ ...form, name_station: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Линия</Label>
          <Input
            value={form.name_line}
            onChange={(e) => setForm({ ...form, name_line: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Номер линии</Label>
          <Input
            value={form.no_line}
            onChange={(e) => setForm({ ...form, no_line: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Тип станции</Label>
          <Select
            value={form.type}
            onValueChange={(v) =>
              setForm({ ...form, type: v as FormState & never })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="М">Метро</SelectItem>
              <SelectItem value="МЦК">МЦК</SelectItem>
              <SelectItem value="МЦД">МЦД</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Статус</Label>
          <Select
            value={form.status}
            onValueChange={(v) =>
              setForm({
                ...form,
                status: v as "Действующая" | "Планируемая",
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Действующая">Действующая</SelectItem>
              <SelectItem value="Планируемая">Планируемая</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Пересадка</Label>
          <Select
            value={form.transfer}
            onValueChange={(v) =>
              setForm({ ...form, transfer: v as "true" | "false" })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">true</SelectItem>
              <SelectItem value="false">false</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label>Округ</Label>
          <Input
            value={form.administrative_district}
            onChange={(e) =>
              setForm({
                ...form,
                administrative_district: e.target.value,
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>Район</Label>
          <Input
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label>Существующий пасспоток</Label>
          <Input
            value={form.CurLd}
            onChange={(e) => setForm({ ...form, CurLd: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Существующая загрузка</Label>
          <Input
            value={form.CurLdRel}
            onChange={(e) => setForm({ ...form, CurLdRel: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

export default TrainForm;
