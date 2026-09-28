import { createClient } from '@/lib/supabase/server';

function improve(input: Record<string, string>) {
  const parts: string[] = [];
  const notes: string[] = [];
  if (input.task) parts.push(input.task);
  if (input.topic) {
    parts.push(`Topic: ${input.topic}.`);
    notes.push('Added topic for specificity.');
  }
  if (input.audience) {
    parts.push(`Audience: ${input.audience}.`);
    notes.push('Added target audience so the response can be tailored.');
  }
  if (input.context) {
    parts.push(`Context: ${input.context}.`);
    notes.push('Added context to reduce ambiguity.');
  }
  if (input.constraints) {
    parts.push(`Constraints: ${input.constraints}.`);
    notes.push('Added constraints to guide the AI.');
  }
  if (input.format) {
    parts.push(`Format the answer as: ${input.format}.`);
    notes.push('Added output format to make the result usable.');
  }
  return { prompt: parts.join('\n'), notes };
}

export default async function BuilderPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const templateId = sp.template;
  const supabase = await createClient();
  let template: any = null;
  if (templateId) {
    const { data } = await supabase
      .from('templates')
      .select('*')
      .eq('id', templateId)
      .maybeSingle();
    template = data;
  }
  const fields = ['task', 'topic', 'audience', 'context', 'constraints', 'format'];
  const input: Record<string, string> = {};
  for (const f of fields) if (sp[f]) input[f] = sp[f]!;
  const hasInput = Object.keys(input).length > 0;
  const result = hasInput ? improve(input) : null;

  return (
    <>
      <h1>Prompt builder</h1>
      {template && (
        <p>
          Template: <strong>{template.title}</strong> — {template.description}
        </p>
      )}
      <form>
        {templateId && <input type="hidden" name="template" value={templateId} />}
        {fields.map((f) => (
          <p key={f}>
            <label>
              {f}:{' '}
              <input name={f} defaultValue={sp[f] ?? ''} style={{ width: 300 }} />
            </label>
          </p>
        ))}
        <button type="submit">Improve</button>
      </form>
      {result && (
        <>
          <h2>Improved prompt</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: 12 }}>
            {result.prompt}
          </pre>
          <h3>Why it got better</h3>
          <ul>
            {result.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
