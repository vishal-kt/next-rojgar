
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLISHABLE_KEY
);

async function testConnection() {
  const { data, error } = await supabase
    .from('connection_test')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Supabase response:', error.message);
    process.exitCode = 1;
    return;
  }

  console.log('Supabase connection successful!');
}

testConnection();
