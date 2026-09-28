export default async function CoachPage({
  searchParams,
}: {
  searchParams: Promise<{ prompt?: string }>;
}) {
  const { prompt } = await searchParams;
  let feedback: string[] = [];
  if (prompt) {
    if (prompt.length < 20) feedback.push('Your prompt is very short — add what you want and who it is for.');
    if (!/for |audience|beginner|student/i.test(prompt))
      feedback.push('Missing audience: who should the answer serve?');
    if (!/table|list|steps|words|format/i.test(prompt))
      feedback.push('Missing output format: table, list, steps?');
    if (feedback.length === 0) feedback.push('Clear prompt. Try adding constraints to tighten it.');
  }
  return (
    <>
      <h1>Prompt coach</h1>
      <form>
        <p>
          <textarea name="prompt" defaultValue={prompt ?? ''} rows={4} cols={60} placeholder="Write something about business" />
        </p>
        <button type="submit">Review</button>
      </form>
      {prompt && (
        <>
          <h2>Feedback</h2>
          <ul>
            {feedback.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
