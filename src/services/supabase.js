import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fapdqinwlzaswwovpsvb.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcGRxaW53bHphc3d3b3Zwc3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyODE0MTksImV4cCI6MjAyMTg1NzQxOX0.p9HIralnaGqeo2kwUUUOWk3emkvS9cvWQRppb9G-bFg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
