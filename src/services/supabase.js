import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yezerjfjewlflvmlcclm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllemVyamZqZXdsZmx2bWxjY2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMjg3NDksImV4cCI6MjAxMTkwNDc0OX0.DAJvaVubDg57NWFEadP593L65jVHwjJx1P-0eyVQ9m8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
