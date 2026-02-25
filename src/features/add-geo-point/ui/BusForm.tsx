import { Input, Label, Textarea } from "@/shared";
import type { FormState } from "./FormType";

export const BusForm = ({
  form,
  setForm,
}: {
  form: FormState;
  setForm: (value: React.SetStateAction<FormState>) => void;
}) => {
  if (form.kind !== "Bus") return;
  return (
    <>
      <div className="space-y-2">
        <Label>Название остановки *</Label>
        <Input
          value={form.name_mpv}
          onChange={(e) => setForm({ ...form, name_mpv: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Маршруты</Label>
        <Input
          value={form.marshrut}
          onChange={(e) => setForm({ ...form, marshrut: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Адрес</Label>
        <Textarea
          value={form.address_mpv}
          onChange={(e) => setForm({ ...form, address_mpv: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label>Район</Label>
          <Input
            value={form.rayon}
            onChange={(e) => setForm({ ...form, rayon: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label>Округ</Label>
          <Input
            value={form.ao}
            onChange={(e) => setForm({ ...form, ao: e.target.value })}
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
