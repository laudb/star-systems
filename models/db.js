const { createClient } = require('@supabase/supabase-js')

// supabase config
let supabase_url = process.env.SUPABASE_URL
let public_anon_key = process.env.PUBLIC_ANON_KEY

module.exports = createClient(supabase_url, public_anon_key)