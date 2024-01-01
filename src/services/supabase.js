import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rkirjnlzxhzoiydlyoir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJraXJqbmx6eGh6b2l5ZGx5b2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMzgxNjMsImV4cCI6MjAxNzgxNDE2M30.fZOWjuBqDYup6Ta3FEJ2YECykxtovCFHl-V1xS3iUFE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
