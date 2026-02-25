export type FormState =
  | {
      kind: "Train";
      name_station: string;
      name_line: string;
      no_line: string;
      type: "М" | "МЦК" | "МЦД";
      status: "Действующая" | "Планируемая";
      transfer: "true" | "false";
      administrative_district: string;
      area: string;
      CurLd: string;
      CurLdRel: string;
    }
  | {
      kind: "Bus";
      name_mpv: string;
      marshrut: string;
      address_mpv: string;
      rayon: string;
      ao: string;
      CurLd: string;
      CurLdRel: string;
    };