import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  let dbOk = false;
  let counts = { categories: 0, templates: 0, lessons: 0 };
  try {
    const supabase = await createClient();
    const [cats, tmps, lss] = await Promise.all([
      supabase.from('categories').select('id', { count: 'exact', head: true }),
      supabase
        .from('templates')
        .select('id', { count: 'exact', head: true })
        .eq('is_published', true),
      supabase
        .from('lessons')
        .select('id', { count: 'exact', head: true })
        .eq('is_published', true),
    ]);
    if (!cats.error && !tmps.error && !lss.error) {
      dbOk = true;
      counts = {
        categories: cats.count ?? 0,
        templates: tmps.count ?? 0,
        lessons: lss.count ?? 0,
      };
    }
  } catch {
    dbOk = false;
  }

  return (
    <>
      <h1>Vivid Prompt</h1>
      <p>
        From vague idea to clear prompt: discover → build → improve →
        understand → copy → save.
      </p>
      <p>
        DB:{' '}
        {dbOk
          ? `connected (${counts.categories} categories, ${counts.templates} templates, ${counts.lessons} lessons)`
          : 'not connected — run `npx supabase start` then `supabase db reset`, copy `.env.example` to `.env.local`'}
      </p>
      <ul>
        <li>
          <a href="/explore">Explore templates</a>
        </li>
        <li>
          <a href="/builder">Prompt builder</a>
        </li>
        <li>
          <a href="/coach">Prompt coach</a>
        </li>
        <li>
          <a href="/learn">Learn</a>
        </li>
      </ul>
    </>
  );
}
