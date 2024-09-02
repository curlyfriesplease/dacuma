export interface Job {
  id: string; // uuid
  jobid: string; // uuid
  quoteref?: string | null;
  jobisopen?: boolean | null;
  customername?: string | null;
  customeremail?: string | null;
  customerphone?: string | null;
  itemdescription?: string | null;
  workdescription?: string | null;
  category?: string | null;
  quotedprice?: number | null;
  partscost?: number | null;
  finalprice?: number | null;
  notes?: string | null;
  timeestimate?: number | null; // decimal
  totaltime?: number | null; // decimal
  flagred?: boolean | null;
  flagyellow?: boolean | null;
  flaggreen?: boolean | null;
  status1timestamp?: string | null; // timestamp with time zone
  status2timestamp?: string | null; // timestamp with time zone
  status3timestamp?: string | null; // timestamp with time zone
  status4timestamp?: string | null; // timestamp with time zone
  status5timestamp?: string | null; // timestamp with time zone
  status6timestamp?: string | null; // timestamp with time zone
  status7timestamp?: string | null; // timestamp with time zone
  updated_at?: string | null; // timestamp with time zone
}
