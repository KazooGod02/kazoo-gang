// Cliente de Supabase (backend gratis compartido: noticias, graffiti, eventos).
// La anon key es PÚBLICA por diseño; la seguridad va por las reglas (RLS) en Supabase.
import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://blvckusbzcifsvfasjxz.supabase.co";
export const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdmNrdXNiemNpZnN2ZmFzanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3ODU1MzksImV4cCI6MjA5OTM2MTUzOX0.TSdNGUJ1aX2ssZKhTkez1YiiZuvLK693kc6SH91WlaU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
