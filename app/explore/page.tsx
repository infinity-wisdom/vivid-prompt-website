import { createClient } from '@/lib/supabase/server';

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const supabase = await createClient();
  let templates: any[] = [];
  let error: string | null = null;
  try {
    let query = supabase
      .from('templates')
      .select('id,title,description,example_use_case,is_featured')
      .eq('is_published', true)
      .limit(50);
    if (q) query = query.ilike('title', `%${q}%`);
    const { data, error: err } = await query;
    if (err) error = err.message;
    else templates = data ?? [];
  } catch (e: any) {
    error = e?.message ?? 'DB not connected';
  }
  return (
    <>
      <h1>Explore templates</h1>
      <form>
        <input name="q" defaultValue={q ?? ''} placeholder="Write a study timetable" />
        <button type="submit">Search</button>
      </form>
      {error && <p>DB: {error}</p>}
      <ul>
        {templates.map((t) => (
          <li key={t.id}>
            <a href={`/builder?template=${t.id}`}>{t.title}</a> — {t.description}
          </li>
        ))}
      </ul>
      {templates.length === 0 && !error && <p>No templates yet. Seed the DB.</p>}
    </>
  );
}
