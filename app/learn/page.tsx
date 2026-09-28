import { createClient } from '@/lib/supabase/server';

export default async function LearnPage() {
  const supabase = await createClient();
  let lessons: any[] = [];
  try {
    const { data } = await supabase
      .from('lessons')
      .select('slug,title,concept,body')
      .eq('is_published', true)
      .limit(50);
    lessons = data ?? [];
  } catch {
    lessons = [];
  }
  return (
    <>
      <h1>Learn</h1>
      <ul>
        {lessons.map((l) => (
          <li key={l.slug}>
            <strong>{l.title}</strong> ({l.concept}) — {l.body}
          </li>
        ))}
      </ul>
      {lessons.length === 0 && <p>No lessons yet (DB not connected or empty).</p>}
    </>
  );
}
