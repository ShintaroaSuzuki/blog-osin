import { supabase } from '@/lib/supabase/supabaseClient'

export const getAllPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select()

  if (error) throw new Error(`${error}`)

  return data
}

