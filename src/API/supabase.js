import { createClient } from "@supabase/supabase-js";

let apiUrl = 'https://oaumvonsnkirsxzuaabl.supabase.co' ;
let apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdW12b25zbmtpcnN4enVhYWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzOTU2MDIsImV4cCI6MjA0NTk3MTYwMn0.MdibQszc6RzwWxVecFqHoG_btpBWprGB9hQ3N903eiU' ;

export const supabase = createClient(apiUrl , apiKey);