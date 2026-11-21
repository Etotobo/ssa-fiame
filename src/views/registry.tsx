import type { ComponentType } from "react";
import type { PageKey } from "@/site/pages";
import type { Lang } from "@/site/ssa";
import { Home } from "./Home";
import { Fiame } from "./Fiame";
import { About } from "./About";
import { Stands } from "./Stands";
import { Magazine } from "./Magazine";
import { Partners } from "./Partners";
import { Contact } from "./Contact";

export const PAGE_COMPONENT: Record<PageKey, ComponentType<{ lang: Lang }>> = {
  home: Home,
  about: About,
  fiame: Fiame,
  stands: Stands,
  magazine: Magazine,
  partners: Partners,
  contact: Contact,
};
