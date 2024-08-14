import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mejhwmuygaabhrmqinoi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lamh3bXV5Z2FhYmhybXFpbm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MDA0NzMsImV4cCI6MjAzNzI3NjQ3M30.3HVhTDIklxhxOY4BR5PTfpQA9KTsK-75n_mIsetWI4Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);