import { useMemo, useState } from "react";

import { cancelAdding, startAdding, useAddMode } from "@/features";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import type { AddGeoPointDraft } from "../model/type";
import { BusForm } from "./BusForm";
import type { FormState } from "./FormType";
import TrainForm from "./TrainForm";

const defaultTrain: FormState = {
  kind: "Train",
  name_station: "",
  name_line: "",
  no_line: "",
  type: "М",
  status: "Действующая",
  transfer: "false",
  administrative_district: "",
  area: "",
  CurLd: "",
  CurLdRel: "",
};

const defaultBus: FormState = {
  kind: "Bus",
  name_mpv: "",
  marshrut: "",
  address_mpv: "",
  rayon: "",
  ao: "",
  CurLd: "",
  CurLdRel: "",
};

export const AddGeoPointButton = () => {
  const addMode = useAddMode();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<FormState>(defaultTrain);

  const isPlacing = addMode === "placing";

  const canSubmit = useMemo(() => {
    if (form.kind === "Train") return form.name_station.trim().length > 0;
    return form.name_mpv.trim().length > 0;
  }, [form]);

  const submit = () => {
    if (!canSubmit) return;

    const draft: AddGeoPointDraft =
      form.kind === "Train"
        ? {
            kind: "Train",
            data: {
              name_station: form.name_station,
              name_line: form.name_line,
              no_line: form.no_line,
              type: form.type,
              status: form.status,
              transfer: form.transfer,
              administrative_district: form.administrative_district,
              area: form.area,
              CurLd: form.CurLd,
              CurLdRel: form.CurLdRel,
            },
          }
        : {
            kind: "Bus",
            data: {
              name_mpv: form.name_mpv,
              marshrut: form.marshrut,
              address_mpv: form.address_mpv,
              rayon: form.rayon,
              ao: form.ao,
              CurLd: form.CurLd,
              CurLdRel: form.CurLdRel,
            },
          };

    startAdding(draft);
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button disabled={isPlacing}>Добавить точку</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-130">
          <DialogHeader>
            <DialogTitle>Добавить точку</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Тип</Label>
              <Select
                value={form.kind}
                onValueChange={(v) => {
                  if (v === "Train") setForm(defaultTrain);
                  if (v === "Bus") setForm(defaultBus);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Train">Train</SelectItem>
                  <SelectItem value="Bus">Bus</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {form.kind === "Train" ? (
              <TrainForm form={form} setForm={setForm} />
            ) : (
              <BusForm form={form} setForm={setForm} />
            )}

            <div className="text-sm text-muted-foreground">
              После сохранения кликните на карте, чтобы поставить точку.
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Отмена
            </Button>
            <Button onClick={submit} disabled={!canSubmit}>
              Далее
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {isPlacing ? (
        <Button variant="secondary" onClick={cancelAdding}>
          Отменить постановку
        </Button>
      ) : null}
    </div>
  );
};
