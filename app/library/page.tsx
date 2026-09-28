import { createClient } from '@/lib/supabase/server';

export default async function LibraryPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return <p>Sign in to see your prompt library (Supabase Auth).</p>;
  const { data } = await supabase
    .from('prompts')
    .select('id,title,visibility,folder,created_at')
    .order('created_at', { ascending: false });
  return (
    <>
      <h1>My prompt library</h1>
      <ul>
        {(data ?? []).map((p: any) => (
          <li key={p.id}>
            {p.title} [{p.visibility}/{p.folder}]
          </li>
        ))}
      </ul>
    </>
  );
}
